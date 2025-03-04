"use client";

import React, { useEffect, useState } from "react";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot 
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { toast } from "react-toastify";

export default function InventoryPage() {
  const [items, setItems] = useState([]);
  const [newItemProductName, setNewItemProductName] = useState("");
  const [newItemBarcode, setNewItemBarcode] = useState("");
  const [newItemPricePerUnit, setNewItemPricePerUnit] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [addItemWarning, setAddItemWarning] = useState("");
  
  // Maintain a sell quantity for each item
  const [sellQuantities, setSellQuantities] = useState({});

  // Subscribe to real-time updates
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "inventory"),
      (snapshot) => {
        const itemsArray = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(itemsArray);
      },
      (error) => {
        toast.error("Error fetching items: " + error.message);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleAddItem = async () => {
    // Validate all fields are entered
    if (
      !newItemProductName.trim() ||
      !newItemBarcode.trim() ||
      !newItemPricePerUnit ||
      !newItemQuantity
    ) {
      setAddItemWarning("Please fill in all fields.");
      return;
    }
    setAddItemWarning("");
    try {
      await addDoc(collection(db, "inventory"), {
        productName: newItemProductName,
        barcode: newItemBarcode,
        "price per unit": parseFloat(newItemPricePerUnit),
        quantity: parseInt(newItemQuantity)
      });
      setNewItemProductName("");
      setNewItemBarcode("");
      setNewItemPricePerUnit("");
      setNewItemQuantity("");
      toast.success("Item added successfully!");
    } catch (error) {
      toast.error("Error adding item: " + error.message);
    }
  };

  const handleSellItem = async (id, currentQuantity, saleQuantityInput) => {
    const saleQuantity = parseInt(saleQuantityInput, 10);
    if (isNaN(saleQuantity) || saleQuantity <= 0) {
      toast.error("Enter a valid sale quantity greater than 0.");
      return;
    }
    if (saleQuantity > currentQuantity) {
      toast.error("Cannot sell more than available quantity.");
      return;
    }
    try {
      if (saleQuantity === currentQuantity) {
        await deleteDoc(doc(db, "inventory", id));
        toast.info("Item sold out and removed from inventory");
      } else {
        const itemRef = doc(db, "inventory", id);
        await updateDoc(itemRef, { quantity: currentQuantity - saleQuantity });
        toast.info("Item sold! Quantity updated");
      }
      // Reset sell quantity for the item to default (1)
      setSellQuantities(prev => ({ ...prev, [id]: 1 }));
    } catch (error) {
      toast.error("Error updating item: " + error.message);
    }
  };

  const handleInlineEdit = async (id, field, value) => {
    try {
      const itemRef = doc(db, "inventory", id);
      // Determine value type based on the field
      const updateValue =
        field === "price per unit" ? parseFloat(value) : parseInt(value);
      await updateDoc(itemRef, { [field]: updateValue });
      toast.success("Item updated successfully!");
    } catch (error) {
      toast.error("Error updating item: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: "url('/inventory.jpg')" }}
      />

      {/* Content Container */}
      <div className="relative p-4">
        {/* Header */}
        <header className="flex items-center justify-center p-4 bg-gray-300 rounded-md mb-6">
          <img src="/logo.ico" alt="Logo" className="h-10 w-10 mr-4" />
          <h1 
            className="text-3xl font-bold uppercase" 
            style={{ fontFamily: 'Avro, sans-serif' }}
          >
            YOUR INVENTORY
          </h1>
        </header>

        {/* Add Item Form */}
        <div className="mb-6 bg-gray-300 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newItemProductName}
              onChange={(e) => setNewItemProductName(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Barcode"
              value={newItemBarcode}
              onChange={(e) => setNewItemBarcode(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price Per Unit"
              value={newItemPricePerUnit}
              onChange={(e) => setNewItemPricePerUnit(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItemQuantity}
              onChange={(e) => setNewItemQuantity(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <button 
              onClick={handleAddItem}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Add New Item
            </button>
            {addItemWarning && (
              <span className="mt-2 text-red-600 text-sm">{addItemWarning}</span>
            )}
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-gray-300 rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-400">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Barcode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price Per Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Sell Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="bg-gray-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.productName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.barcode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      defaultValue={item["price per unit"]}
                      onBlur={(e) =>
                        handleInlineEdit(item.id, "price per unit", e.target.value)
                      }
                      className="p-1 w-24 text-right border rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      defaultValue={item.quantity}
                      onBlur={(e) =>
                        handleInlineEdit(item.id, "quantity", e.target.value)
                      }
                      className="p-1 w-20 text-right border rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      value={sellQuantities[item.id] || 1}
                      onChange={(e) =>
                        setSellQuantities(prev => ({
                          ...prev,
                          [item.id]: e.target.value
                        }))
                      }
                      className="p-1 w-16 text-right border rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() =>
                        handleSellItem(item.id, item.quantity, sellQuantities[item.id] || 1)
                      }
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
