"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig"; // Ensure firebaseConfig.js exports { db }
import Quagga from "quagga";
import { toast } from "react-toastify";

const ScanSellPage = () => {
  // Current scanned product details
  const [barcode, setBarcode] = useState("");
  const [productName, setProductName] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0); // from Firestore: "price per unit"
  const [sellQuantity, setSellQuantity] = useState(1);
  const [currentDocRef, setCurrentDocRef] = useState(null);

  // UI states
  const [scanned, setScanned] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false); // modal for current scanned product
  const [cart, setCart] = useState([]); // persistent cart
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  // Override console.error to suppress errors containing "reading 'data'"
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

  // Initialize Quagga scanner
  useEffect(() => {
    const scannerContainer = document.getElementById("barcode-scanner-sell");
    if (!scannerContainer) return;
    if (!scanned) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            target: scannerContainer,
            constraints: { width: 640, height: 480, facingMode: "environment" },
          },
          decoder: { readers: ["ean_reader", "code_128_reader"] },
        },
        (err) => {
          if (err) {
            console.error("Quagga init error:", err);
            toast.error("Error initializing scanner: " + err.message);
            return;
          }
          Quagga.start();
        }
      );
      Quagga.onDetected(async (result) => {
        try {
          const scannedCode = result.codeResult.code;
          if (!scanned) {
            setBarcode(scannedCode);
            setScanned(true);
            Quagga.stop();
            // Fetch product details from Firestore "inventory"
            const productsRef = collection(db, "inventory");
            const querySnapshot = await getDocs(productsRef);
            let found = false;
            querySnapshot.forEach((docSnapshot) => {
              const data = docSnapshot.data();
              if (data && data.barcode === scannedCode) {
                setProductName(data.productName || "Unknown Product");
                setAvailableQuantity(data.quantity || 0);
                setPricePerUnit(data["price per unit"] || 0);
                setCurrentDocRef(docSnapshot.ref);
                found = true;
              }
            });
            if (!found) {
              toast.error("Product not found in inventory!");
              setProductName("Unknown Product");
              setAvailableQuantity(0);
              setPricePerUnit(0);
              setCurrentDocRef(null);
            }
            setConfirmVisible(true);
          }
        } catch (error) {
          console.warn("Error in onDetected handler:", error);
        }
      });
    }
    return () => {
      Quagga.offDetected();
      Quagga.stop();
    };
  }, [scanned]);

  // Reset the current scanned product state (but not the cart)
  const resetCurrentProduct = () => {
    setBarcode("");
    setProductName("");
    setAvailableQuantity(0);
    setPricePerUnit(0);
    setSellQuantity(1);
    setCurrentDocRef(null);
    setConfirmVisible(false);
    setScanned(false);
    Quagga.start();
  };

  // Reset the entire page for new operations (clears cart as well)
  const resetPage = () => {
    setBarcode("");
    setProductName("");
    setAvailableQuantity(0);
    setPricePerUnit(0);
    setSellQuantity(1);
    setCurrentDocRef(null);
    setScanned(false);
    setConfirmVisible(false);
    setCart([]);
    setReceiptVisible(false);
    setReceiptData(null);
    Quagga.start();
  };

  // Process sale immediately for the current product
  const handleConfirmSale = async () => {
    if (!barcode || !currentDocRef) {
      toast.error("Invalid product details. Please scan again.");
      return;
    }
    if (sellQuantity <= 0 || sellQuantity > availableQuantity) {
      toast.error("Enter a valid quantity to sell.");
      return;
    }
    try {
      const newQuantity = availableQuantity - sellQuantity;
      await updateDoc(currentDocRef, { quantity: newQuantity });
      
      // Build receipt data for single product sale
      const receipt = {
        products: [
          {
            productName,
            sellQuantity,
            price: pricePerUnit,
            subtotal: sellQuantity * pricePerUnit,
          },
        ],
        total: sellQuantity * pricePerUnit,
        timestamp: new Date(),
      };
      setReceiptData(receipt);
      setReceiptVisible(true);
      toast.success("Sale completed successfully!");
      setTimeout(resetPage, 3000); // return to start after 3 seconds
    } catch (error) {
      console.error("Error processing sale:", error);
      toast.error("Error processing sale: " + error.message);
    }
  };

  // Add the current product to the cart (cart is preserved)
  const handleAddToCart = () => {
    if (!barcode || !currentDocRef) {
      toast.error("Invalid product details. Please scan again.");
      return;
    }
    if (sellQuantity <= 0 || sellQuantity > availableQuantity) {
      toast.error("Enter a valid quantity to add.");
      return;
    }
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.barcode === barcode);
      if (index >= 0) {
        const updatedItem = { ...prevCart[index] };
        if (updatedItem.sellQuantity + sellQuantity > availableQuantity) {
          toast.error("Total quantity exceeds available stock!");
          return prevCart;
        }
        updatedItem.sellQuantity += sellQuantity;
        const newCart = [...prevCart];
        newCart[index] = updatedItem;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            barcode,
            productName,
            availableQuantity,
            price: pricePerUnit,
            sellQuantity,
            docRef: currentDocRef,
          },
        ];
      }
    });
    toast.success("Product added to cart!");
    // Reset current product state, but keep cart intact
    resetCurrentProduct();
  };

  // Process sale for all products in the cart
  const handleSellAll = async () => {
    if (cart.length === 0) {
      toast.error("No products in cart to sell.");
      return;
    }
    let receiptProducts = [];
    let totalBill = 0;
    try {
      for (const item of cart) {
        const productsRef = collection(db, "inventory");
        const querySnapshot = await getDocs(productsRef);
        let productDoc = null;
        querySnapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data();
          if (data && data.barcode === item.barcode) {
            productDoc = docSnapshot;
          }
        });
        if (!productDoc) {
          toast.error(`Product ${item.productName} not found in inventory!`);
          continue;
        }
        const currentQty = productDoc.data().quantity || 0;
        if (item.sellQuantity > currentQty) {
          toast.error(`Insufficient stock for ${item.productName}!`);
          continue;
        }
        const newQuantity = currentQty - item.sellQuantity;
        await updateDoc(productDoc.ref, { quantity: newQuantity });
        const subtotal = item.sellQuantity * item.price;
        receiptProducts.push({
          productName: item.productName,
          sellQuantity: item.sellQuantity,
          price: item.price,
          subtotal,
        });
        totalBill += subtotal;
      }
      const receipt = {
        products: receiptProducts,
        total: totalBill,
        timestamp: new Date(),
      };
      setReceiptData(receipt);
      setReceiptVisible(true);
      toast.success("Sale completed successfully!");
      setCart([]); // clear cart after sale
      setTimeout(resetPage, 3000);
    } catch (error) {
      console.error("Error processing multi-product sale:", error);
      toast.error("Error processing sale: " + error.message);
    }
  };

  // Save receipt as a text file
  const handleSaveReceipt = () => {
    if (!receiptData) return;
    let receiptText = "Sale Receipt\n\n";
    receiptData.products.forEach((item) => {
      receiptText += `Product: ${item.productName}\n`;
      receiptText += `Quantity: ${item.sellQuantity}\n`;
      receiptText += `Price per unit: ${item.price}\n`;
      receiptText += `Subtotal: ${item.subtotal}\n\n`;
    });
    receiptText += `Total Bill: ${receiptData.total}\n`;
    receiptText += `Timestamp: ${new Date(receiptData.timestamp).toLocaleString()}\n`;
    
    const blob = new Blob([receiptText], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "receipt.txt";
    a.click();
    window.URL.revokeObjectURL(url);
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
          <p className="text-sm">Scan to Sell - Sell your products</p>
        </div>
      </header>

      {/* Body Section */}
      <main className="bg-white-100 flex flex-col items-center py-10">
        <div id="barcode-scanner-sell" className="w-80 h-60 bg-black mb-4"></div>
        {barcode && !confirmVisible && (
          <p className="mb-2 text-lg">Scanned Barcode: {barcode}</p>
        )}

        {/* Confirmation Modal for current product */}
        {confirmVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className="bg-white p-6 rounded shadow-lg w-80">
              <h2 className="text-xl font-bold mb-2">Confirm Product</h2>
              <p className="mb-1">Product: {productName}</p>
              <p className="mb-1">Available: {availableQuantity}</p>
              <p className="mb-1">Price per unit: {pricePerUnit}</p>
              <input
                type="number"
                placeholder="Enter quantity to sell"
                value={sellQuantity}
                onChange={(e) => setSellQuantity(Number(e.target.value))}
                className="p-2 border rounded mb-2"
                min="1"
                max={availableQuantity}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleConfirmSale}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Confirm Sale
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Add Product
                </button>
                <button
                  onClick={resetCurrentProduct}
                  className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Persistent Cart Section */}
        {cart.length > 0 && (
          <div className="w-80 bg-white p-4 rounded shadow mt-4">
            <h2 className="text-xl font-bold mb-2">Cart</h2>
            {cart.map((item, index) => (
              <div key={index} className="mb-2 border-b pb-1">
                <p>{item.productName}</p>
                <p>
                  Quantity: {item.sellQuantity} | Price per unit: {item.price} | Subtotal:{" "}
                  {item.sellQuantity * item.price}
                </p>
              </div>
            ))}
            <button
              onClick={handleSellAll}
              className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sell All
            </button>
          </div>
        )}

        {/* Receipt Modal */}
        {receiptVisible && receiptData && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className="bg-white p-6 rounded shadow-lg w-80">
              <h2 className="text-xl font-bold mb-2">Sale Receipt</h2>
              {receiptData.products.map((item, index) => (
                <div key={index} className="mb-2 border-b pb-1">
                  <p>{item.productName}</p>
                  <p>
                    Quantity: {item.sellQuantity} | Price per unit: {item.price} | Subtotal:{" "}
                    {item.subtotal}
                  </p>
                </div>
              ))}
              <p className="font-bold">Total Bill: {receiptData.total}</p>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={handleSaveReceipt}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Save Receipt
                </button>
                <button
                  onClick={resetPage}
                  className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScanSellPage;
