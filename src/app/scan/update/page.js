"use client";

import { useEffect, useState } from "react";
import Quagga from "quagga";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { toast } from "react-toastify";

const ScanUpdatePage = () => {
  const [barcode, setBarcode] = useState("");
  const [productName, setProductName] = useState(""); // When saved, productName is stored in all caps
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [scanned, setScanned] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [existingProduct, setExistingProduct] = useState(null);

  // Override console.error to suppress errors that include "reading 'data'"
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("reading 'data'")
      ) {
        return;
      }
      originalConsoleError(...args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // Global error handler as an extra layer.
  useEffect(() => {
    const handleGlobalError = (event) => {
      if (
        event.error &&
        event.error.message &&
        event.error.message.includes("reading 'data'")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("error", handleGlobalError);
    return () => {
      window.removeEventListener("error", handleGlobalError);
    };
  }, []);

  useEffect(() => {
    const scannerContainer = document.getElementById("barcode-scanner-update");
    if (!scannerContainer) return;

    if (!scanned) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            target: scannerContainer,
            constraints: {
              width: 640,
              height: 480,
              facingMode: "environment",
            },
          },
          decoder: {
            readers: ["ean_reader", "code_128_reader"],
          },
        },
        (err) => {
          if (err) {
            console.error("Error initializing Quagga:", err);
            toast.error("Error initializing scanner: " + err.message);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected(async (result) => {
        try {
          const detectedCode = result.codeResult.code;
          if (!scanned) {
            setBarcode(detectedCode);
            setScanned(true);
            Quagga.stop();
            // Check if product already exists in Firestore.
            const productsRef = collection(db, "inventory");
            try {
              const querySnapshot = await getDocs(productsRef);
              let foundProduct = null;
              for (const docSnapshot of querySnapshot.docs) {
                if (!docSnapshot) continue; // Defensive check
                const data = docSnapshot.data();
                if (data && data.barcode === detectedCode) {
                  // Store the document id along with the data.
                  foundProduct = { id: docSnapshot.id, ...data };
                  break;
                }
              }
              if (foundProduct) {
                setExistingProduct(foundProduct);
                setProductName(foundProduct.productName || "");
                setPricePerUnit(foundProduct["price per unit"]?.toString() || "");
              } else {
                setExistingProduct(null);
                setProductName("");
                setPricePerUnit("");
              }
            } catch (error) {
              toast.error("Error checking product: " + error.message);
            }
            setConfirmVisible(true);
          }
        } catch (error) {
          console.warn("Benign error in onDetected handler:", error);
        }
      });
    }

    return () => {
      try {
        if (Quagga && typeof Quagga.offDetected === "function") {
          Quagga.offDetected();
          Quagga.stop();
        }
      } catch (error) {
        console.warn("Error during Quagga cleanup:", error);
      }
    };
  }, [scanned]);

  const handleSaveProduct = async () => {
    if (!barcode) {
      toast.error("Barcode is missing. Please scan again.");
      return;
    }
    if (!existingProduct) {
      if (
        !productName.trim() ||
        !pricePerUnit.toString().trim() ||
        quantity <= 0
      ) {
        toast.error(
          "Please enter valid product details (name, price per unit, and quantity)."
        );
        return;
      }
    } else {
      if (quantity <= 0) {
        toast.error("Please enter a valid quantity.");
        return;
      }
    }

    try {
      const productsRef = collection(db, "inventory");
      if (existingProduct) {
        if (!existingProduct.id) {
          toast.error("Error: Existing product has no valid ID.");
          return;
        }
        console.log("Updating product:", existingProduct);
        const newQuantity = (existingProduct.quantity || 0) + quantity;
        await updateDoc(doc(db, "inventory", existingProduct.id), {
          quantity: newQuantity,
        });
        toast.success("Product quantity updated successfully!");
      } else {
        await addDoc(productsRef, {
          barcode,
          productName: productName.toUpperCase(), // Convert to all caps here
          "price per unit": parseFloat(pricePerUnit),
          quantity,
        });
        toast.success("New product added successfully!");
      }
      // Reset state for the next scan.
      setBarcode("");
      setProductName("");
      setPricePerUnit("");
      setQuantity(1);
      setScanned(false);
      setConfirmVisible(false);
      setExistingProduct(null);
      try {
        Quagga.start();
      } catch (e) {
        if (e && e.message && e.message.includes("reading 'data'")) {
          // Suppress this error.
        } else {
          console.error(e);
        }
      }
    } catch (error) {
      console.error("Error updating inventory:", error);
      toast.error("Error updating inventory: " + error.message);
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Arvo" }}>
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-4 px-6 flex items-center">
        <img
          src="/logo.ico"
          alt="Logo"
          className="w-10 h-10 mr-4 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold uppercase">ShopKeeper</h1>
          <p className="text-sm">You are updating your inventory</p>
        </div>
      </header>

      {/* Body Section */}
      <main className="bg-white-500 flex flex-col items-center py-10">
        <div
          className="mb-8"
          id="barcode-scanner-update"
          style={{ width: 320, height: 240, backgroundColor: "#000" }}
        ></div>
        {barcode && <p className="mb-4 text-lg">Scanned Barcode: {barcode}</p>}
        {confirmVisible && (
          <div className="flex flex-col gap-3 w-80 bg-white p-4 rounded shadow">
            {existingProduct ? (
              <>
                <p className="text-lg">Product Name: {productName}</p>
                <p className="text-lg">Price Per Unit: {pricePerUnit}</p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Enter Price Per Unit"
                  value={pricePerUnit}
                  onChange={(e) => setPricePerUnit(e.target.value)}
                  className="p-2 border rounded"
                />
              </>
            )}
            <input
              type="number"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="p-2 border rounded"
            />
            <button
              onClick={handleSaveProduct}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-105"
            >
              Confirm & Save
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScanUpdatePage;
