(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_scan_sell_page_be845b44.js", {

"[project]/src/app/scan/sell/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firebaseConfig.js [app-client] (ecmascript)"); // Ensure firebaseConfig.js exports { db }
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/quagga/dist/quagga.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ScanSellPage = ()=>{
    _s();
    // Current scanned product details
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [availableQuantity, setAvailableQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pricePerUnit, setPricePerUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // from Firestore: "price per unit"
    const [sellQuantity, setSellQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [currentDocRef, setCurrentDocRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI states
    const [scanned, setScanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmVisible, setConfirmVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // modal for current scanned product
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // persistent cart
    const [receiptVisible, setReceiptVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiptData, setReceiptData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Override console.error to suppress errors containing "reading 'data'"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanSellPage.useEffect": ()=>{
            const originalConsoleError = console.error;
            console.error = ({
                "ScanSellPage.useEffect": (...args)=>{
                    if (args[0] && typeof args[0] === "string" && args[0].includes("reading 'data'")) {
                        return;
                    }
                    originalConsoleError(...args);
                }
            })["ScanSellPage.useEffect"];
            return ({
                "ScanSellPage.useEffect": ()=>{
                    console.error = originalConsoleError;
                }
            })["ScanSellPage.useEffect"];
        }
    }["ScanSellPage.useEffect"], []);
    // Initialize Quagga scanner
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanSellPage.useEffect": ()=>{
            const scannerContainer = document.getElementById("barcode-scanner-sell");
            if (!scannerContainer) return;
            if (!scanned) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                    inputStream: {
                        type: "LiveStream",
                        target: scannerContainer,
                        constraints: {
                            width: 640,
                            height: 480,
                            facingMode: "environment"
                        }
                    },
                    decoder: {
                        readers: [
                            "ean_reader",
                            "code_128_reader"
                        ]
                    }
                }, {
                    "ScanSellPage.useEffect": (err)=>{
                        if (err) {
                            console.error("Quagga init error:", err);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error initializing scanner: " + err.message);
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
                    }
                }["ScanSellPage.useEffect"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onDetected({
                    "ScanSellPage.useEffect": async (result)=>{
                        try {
                            const scannedCode = result.codeResult.code;
                            if (!scanned) {
                                setBarcode(scannedCode);
                                setScanned(true);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                                // Fetch product details from Firestore "inventory"
                                const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "inventory");
                                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(productsRef);
                                let found = false;
                                querySnapshot.forEach({
                                    "ScanSellPage.useEffect": (docSnapshot)=>{
                                        const data = docSnapshot.data();
                                        if (data && data.barcode === scannedCode) {
                                            setProductName(data.productName || "Unknown Product");
                                            setAvailableQuantity(data.quantity || 0);
                                            setPricePerUnit(data["price per unit"] || 0);
                                            setCurrentDocRef(docSnapshot.ref);
                                            found = true;
                                        }
                                    }
                                }["ScanSellPage.useEffect"]);
                                if (!found) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Product not found in inventory!");
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
                    }
                }["ScanSellPage.useEffect"]);
            }
            return ({
                "ScanSellPage.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].offDetected();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                }
            })["ScanSellPage.useEffect"];
        }
    }["ScanSellPage.useEffect"], [
        scanned
    ]);
    // Reset the current scanned product state (but not the cart)
    const resetCurrentProduct = ()=>{
        setBarcode("");
        setProductName("");
        setAvailableQuantity(0);
        setPricePerUnit(0);
        setSellQuantity(1);
        setCurrentDocRef(null);
        setConfirmVisible(false);
        setScanned(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
    };
    // Reset the entire page for new operations (clears cart as well)
    const resetPage = ()=>{
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
    };
    // Process sale immediately for the current product
    const handleConfirmSale = async ()=>{
        if (!barcode || !currentDocRef) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid product details. Please scan again.");
            return;
        }
        if (sellQuantity <= 0 || sellQuantity > availableQuantity) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Enter a valid quantity to sell.");
            return;
        }
        try {
            const newQuantity = availableQuantity - sellQuantity;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(currentDocRef, {
                quantity: newQuantity
            });
            // Build receipt data for single product sale
            const receipt = {
                products: [
                    {
                        productName,
                        sellQuantity,
                        price: pricePerUnit,
                        subtotal: sellQuantity * pricePerUnit
                    }
                ],
                total: sellQuantity * pricePerUnit,
                timestamp: new Date()
            };
            setReceiptData(receipt);
            setReceiptVisible(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sale completed successfully!");
            setTimeout(resetPage, 3000); // return to start after 3 seconds
        } catch (error) {
            console.error("Error processing sale:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error processing sale: " + error.message);
        }
    };
    // Add the current product to the cart (cart is preserved)
    const handleAddToCart = ()=>{
        if (!barcode || !currentDocRef) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid product details. Please scan again.");
            return;
        }
        if (sellQuantity <= 0 || sellQuantity > availableQuantity) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Enter a valid quantity to add.");
            return;
        }
        setCart((prevCart)=>{
            const index = prevCart.findIndex((item)=>item.barcode === barcode);
            if (index >= 0) {
                const updatedItem = {
                    ...prevCart[index]
                };
                if (updatedItem.sellQuantity + sellQuantity > availableQuantity) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Total quantity exceeds available stock!");
                    return prevCart;
                }
                updatedItem.sellQuantity += sellQuantity;
                const newCart = [
                    ...prevCart
                ];
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
                        docRef: currentDocRef
                    }
                ];
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product added to cart!");
        // Reset current product state, but keep cart intact
        resetCurrentProduct();
    };
    // Process sale for all products in the cart
    const handleSellAll = async ()=>{
        if (cart.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No products in cart to sell.");
            return;
        }
        let receiptProducts = [];
        let totalBill = 0;
        try {
            for (const item of cart){
                const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "inventory");
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(productsRef);
                let productDoc = null;
                querySnapshot.forEach((docSnapshot)=>{
                    const data = docSnapshot.data();
                    if (data && data.barcode === item.barcode) {
                        productDoc = docSnapshot;
                    }
                });
                if (!productDoc) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Product ${item.productName} not found in inventory!`);
                    continue;
                }
                const currentQty = productDoc.data().quantity || 0;
                if (item.sellQuantity > currentQty) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Insufficient stock for ${item.productName}!`);
                    continue;
                }
                const newQuantity = currentQty - item.sellQuantity;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(productDoc.ref, {
                    quantity: newQuantity
                });
                const subtotal = item.sellQuantity * item.price;
                receiptProducts.push({
                    productName: item.productName,
                    sellQuantity: item.sellQuantity,
                    price: item.price,
                    subtotal
                });
                totalBill += subtotal;
            }
            const receipt = {
                products: receiptProducts,
                total: totalBill,
                timestamp: new Date()
            };
            setReceiptData(receipt);
            setReceiptVisible(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sale completed successfully!");
            setCart([]); // clear cart after sale
            setTimeout(resetPage, 3000);
        } catch (error) {
            console.error("Error processing multi-product sale:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error processing sale: " + error.message);
        }
    };
    // Save receipt as a text file
    const handleSaveReceipt = ()=>{
        if (!receiptData) return;
        let receiptText = "Sale Receipt\n\n";
        receiptData.products.forEach((item)=>{
            receiptText += `Product: ${item.productName}\n`;
            receiptText += `Quantity: ${item.sellQuantity}\n`;
            receiptText += `Price per unit: ${item.price}\n`;
            receiptText += `Subtotal: ${item.subtotal}\n\n`;
        });
        receiptText += `Total Bill: ${receiptData.total}\n`;
        receiptText += `Timestamp: ${new Date(receiptData.timestamp).toLocaleString()}\n`;
        const blob = new Blob([
            receiptText
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "receipt.txt";
        a.click();
        window.URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            fontFamily: "Arvo"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-blue-700 text-white py-4 px-6 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo.ico",
                        alt: "Logo",
                        className: "w-10 h-10 mr-4 object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold uppercase",
                                children: "ShopKeeper"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/sell/page.js",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Scan to Sell - Sell your products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/sell/page.js",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/sell/page.js",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-white-100 flex flex-col items-center py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "barcode-scanner-sell",
                        className: "w-80 h-60 bg-black mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    barcode && !confirmVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-lg",
                        children: [
                            "Scanned Barcode: ",
                            barcode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    confirmVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded shadow-lg w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Confirm Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1",
                                    children: [
                                        "Product: ",
                                        productName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1",
                                    children: [
                                        "Available: ",
                                        availableQuantity
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1",
                                    children: [
                                        "Price per unit: ",
                                        pricePerUnit
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Enter quantity to sell",
                                    value: sellQuantity,
                                    onChange: (e)=>setSellQuantity(Number(e.target.value)),
                                    className: "p-2 border rounded mb-2",
                                    min: "1",
                                    max: availableQuantity
                                }, void 0, false, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleConfirmSale,
                                            className: "px-3 py-1 bg-green-500 text-white rounded",
                                            children: "Confirm Sale"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddToCart,
                                            className: "px-3 py-1 bg-blue-500 text-white rounded",
                                            children: "Add Product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetCurrentProduct,
                                            className: "px-3 py-1 bg-gray-500 text-white rounded",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/scan/sell/page.js",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 bg-white p-4 rounded shadow mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-2",
                                children: "Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/sell/page.js",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            cart.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 border-b pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Quantity: ",
                                                item.sellQuantity,
                                                " | Price per unit: ",
                                                item.price,
                                                " | Subtotal:",
                                                " ",
                                                item.sellQuantity * item.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSellAll,
                                className: "mt-2 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",
                                children: "Sell All"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/sell/page.js",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this),
                    receiptVisible && receiptData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded shadow-lg w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Sale Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                receiptData.products.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 border-b pb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.productName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/scan/sell/page.js",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Quantity: ",
                                                    item.sellQuantity,
                                                    " | Price per unit: ",
                                                    item.price,
                                                    " | Subtotal:",
                                                    " ",
                                                    item.subtotal
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/scan/sell/page.js",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/scan/sell/page.js",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    children: [
                                        "Total Bill: ",
                                        receiptData.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveReceipt,
                                            className: "px-3 py-1 bg-blue-500 text-white rounded",
                                            children: "Save Receipt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetPage,
                                            className: "px-3 py-1 bg-gray-500 text-white rounded",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/scan/sell/page.js",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/scan/sell/page.js",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/scan/sell/page.js",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/sell/page.js",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/sell/page.js",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/scan/sell/page.js",
        lineNumber: 292,
        columnNumber: 5
    }, this);
};
_s(ScanSellPage, "PWfYI4+Gknw7XBMXdkxzopXFGgI=");
_c = ScanSellPage;
const __TURBOPACK__default__export__ = ScanSellPage;
var _c;
__turbopack_context__.k.register(_c, "ScanSellPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_scan_sell_page_be845b44.js.map