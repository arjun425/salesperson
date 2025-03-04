"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import {
  FiLogOut,
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiClock,
  FiRefreshCw,
  FiShoppingCart,
  FiBox,
} from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("dashboard");
  const [leastStock, setLeastStock] = useState([]);
  const [productData, setProductData] = useState([]);
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: user?.email || "",
    age: "",
    gender: "",
    address: "",
    contact: "",
    avatar: "/avatars/default.png",
  });
  const [recentActivity, setRecentActivity] = useState([
    { action: "Logged in", timestamp: "March 4, 2025 - 10:00 AM" },
    { action: "Updated Inventory", timestamp: "March 3, 2025 - 4:15 PM" },
    { action: "Scanned for Sell", timestamp: "March 3, 2025 - 3:45 PM" },
  ]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const q = query(collection(db, "inventory"), orderBy("quantity", "asc"));
        const querySnapshot = await getDocs(q);
        let inventoryItems = [];
        querySnapshot.forEach((doc) => {
          inventoryItems.push({ id: doc.id, ...doc.data() });
        });
        
        setLeastStock(inventoryItems.slice(0, 5));
        
        setProductData(
          inventoryItems
            .slice()
            .reverse()
            .slice(0, 5)
            .map((item) => ({
              name: item.productName,
              price: item["price per unit"],
              quantity: item.quantity,
            }))
        );
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    fetchInventory();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out successfully!");
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <div className="flex h-screen font-arvo bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } p-4 flex flex-col fixed h-full`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 text-white focus:outline-none"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setSelectedOption("dashboard")}
            className={`flex items-center gap-3 p-2 rounded ${
              selectedOption === "dashboard" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <FiHome size={24} />
            {sidebarOpen && <span>Dashboard</span>}
          </button>
          <button
            onClick={() => setSelectedOption("profile")}
            className={`flex items-center gap-3 p-2 rounded ${
              selectedOption === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <FiUser size={24} />
            {sidebarOpen && <span>Profile</span>}
          </button>
          <button
            onClick={() => setSelectedOption("recent")}
            className={`flex items-center gap-3 p-2 rounded ${
              selectedOption === "recent" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <FiClock size={24} />
            {sidebarOpen && <span>Recent Activity</span>}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-2 rounded hover:bg-red-600 mt-auto"
          >
            <FiLogOut size={24} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Header Section */}
        <div className="h-16 bg-gray-300 flex items-center px-6 text-3xl font-bold shadow-md sticky top-0 z-10">
          <span className="uppercase">
            {selectedOption === "dashboard" && "Dashboard"}
            {selectedOption === "profile" && "Profile"}
            {selectedOption === "recent" && "Recent Activity"}
          </span>
          <img 
            src="/logo.ico" 
            alt="Logo" 
            className="h-8 ml-auto" 
          />
        </div>

        {/* Content Sections */}
        <div className="flex-1 overflow-auto">
          {selectedOption === "dashboard" && (
            <div className="flex h-full">
              {/* Left Action Buttons */}
              <div className="w-1/3 p-6 border-r border-gray-300 bg-yellow-50">
                <h2 className="text-2xl font-semibold mb-4 uppercase">Actions</h2>
                <div className="space-y-4">
                  <Link
                    href="/scan/update"
                    className="block p-4 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center transition-colors"
                  >
                    <FiRefreshCw size={24} className="mr-2" />
                    Scan for Update
                  </Link>
                  <Link
                    href="/scan/sell"
                    className="block p-4 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center transition-colors"
                  >
                    <FiShoppingCart size={24} className="mr-2" />
                    Scan for Sell
                  </Link>
                  <Link
                    href="/inventory"
                    className="block p-4 bg-purple-500 text-white rounded hover:bg-purple-600 flex items-center justify-center transition-colors"
                  >
                    <FiBox size={24} className="mr-2" />
                    View Inventory
                  </Link>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="w-2/3 flex flex-col">
                {/* Top Section - Low Stock */}
                <div className="h-1/2 p-6 border-b border-gray-300 bg-yellow-50">
                  <h2 className="text-2xl font-semibold mb-4 uppercase">Least Available Products</h2>
                  {leastStock.length > 0 ? (
                    <ul className="space-y-2">
                      {leastStock.map((p, index) => (
                        <li key={index} className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                          <span className="font-medium">{p.productName}</span>
                          <span className="text-red-600 font-semibold">{p.quantity} left</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No low stock items found</p>
                  )}
                </div>

                {/* Bottom Section - Chart */}
                <div className="h-1/2 p-6 bg-yellow-50">
                  <h2 className="text-2xl font-semibold mb-4 uppercase">Stock Overview</h2>
                  <div className="h-[300px]">
                    {productData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={productData}>
                          <XAxis 
                            dataKey="name" 
                            angle={-45} 
                            textAnchor="end" 
                            interval={0}
                            tick={{ fontSize: 12 }}
                          />
                          <YAxis />
                          <Tooltip
                            content={({ active, payload, label }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-white p-3 border rounded shadow">
                                    <p className="font-semibold text-gray-800">{label}</p>
                                    <p className="text-sm text-blue-600">
                                      Price: ₹{payload[0].value.toFixed(2)}
                                    </p>
                                    <p className="text-sm text-green-600">
                                      Stock: {payload[0].payload.quantity} units
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar 
                            dataKey="price" 
                            fill="#3b82f6" 
                            radius={[4, 4, 0, 0]}
                            name="Price"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <p className="text-gray-500">No product data available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedOption === "profile" && (
            <div className="p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-6">
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full cursor-pointer border-2 border-gray-400"
                  onClick={() => setShowAvatarSelection(!showAvatarSelection)}
                />
                <h1 className="text-3xl font-bold ml-4 uppercase">Profile Settings</h1>
              </div>

              {showAvatarSelection && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Choose Avatar:</h3>
                  <div className="flex gap-3">
                    {["avatar1", "avatar2", "avatar3"].map((avatar) => (
                      <img
                        key={avatar}
                        src={`/avatars/${avatar}.jpg`}
                        alt="Avatar"
                        className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
                          profile.avatar.includes(avatar) ? "border-blue-500" : "border-transparent"
                        } hover:border-blue-300`}
                        onClick={() => setProfile(p => ({ ...p, avatar: `/avatars/${avatar}.jpg` }))}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                <div>
                  <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile(p => ({ ...p, name: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      value={profile.age}
                      onChange={(e) => setProfile(p => ({ ...p, age: e.target.value }))}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      value={profile.gender}
                      onChange={(e) => setProfile(p => ({ ...p, gender: e.target.value }))}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile(p => ({ ...p, address: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block uppercase text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    value={profile.contact}
                    onChange={(e) => setProfile(p => ({ ...p, contact: e.target.value }))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedOption === "recent" && (
            <div className="p-6 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 uppercase">Recent Activity</h1>
              <div className="bg-white rounded-lg shadow">
                {recentActivity.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 ${
                      index !== recentActivity.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{item.action}</p>
                        <p className="text-sm text-gray-500">{item.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}