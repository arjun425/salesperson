(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_scan_update_page_4823c85b.js", {

"[project]/src/app/scan/update/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/quagga/dist/quagga.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/firebase/firebase.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/firebase.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ScanUpdatePage = ()=>{
    _s();
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // When saved, productName is stored in all caps
    const [pricePerUnit, setPricePerUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [scanned, setScanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmVisible, setConfirmVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [existingProduct, setExistingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Override console.error to suppress errors that include "reading 'data'"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanUpdatePage.useEffect": ()=>{
            const originalConsoleError = console.error;
            console.error = ({
                "ScanUpdatePage.useEffect": (...args)=>{
                    if (args[0] && typeof args[0] === "string" && args[0].includes("reading 'data'")) {
                        return;
                    }
                    originalConsoleError(...args);
                }
            })["ScanUpdatePage.useEffect"];
            return ({
                "ScanUpdatePage.useEffect": ()=>{
                    console.error = originalConsoleError;
                }
            })["ScanUpdatePage.useEffect"];
        }
    }["ScanUpdatePage.useEffect"], []);
    // Global error handler as an extra layer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanUpdatePage.useEffect": ()=>{
            const handleGlobalError = {
                "ScanUpdatePage.useEffect.handleGlobalError": (event)=>{
                    if (event.error && event.error.message && event.error.message.includes("reading 'data'")) {
                        event.preventDefault();
                    }
                }
            }["ScanUpdatePage.useEffect.handleGlobalError"];
            window.addEventListener("error", handleGlobalError);
            return ({
                "ScanUpdatePage.useEffect": ()=>{
                    window.removeEventListener("error", handleGlobalError);
                }
            })["ScanUpdatePage.useEffect"];
        }
    }["ScanUpdatePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanUpdatePage.useEffect": ()=>{
            const scannerContainer = document.getElementById("barcode-scanner-update");
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
                    "ScanUpdatePage.useEffect": (err)=>{
                        if (err) {
                            console.error("Error initializing Quagga:", err);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error initializing scanner: " + err.message);
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
                    }
                }["ScanUpdatePage.useEffect"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onDetected({
                    "ScanUpdatePage.useEffect": async (result)=>{
                        try {
                            const detectedCode = result.codeResult.code;
                            if (!scanned) {
                                setBarcode(detectedCode);
                                setScanned(true);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                                // Check if product already exists in Firestore.
                                const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "inventory");
                                try {
                                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(productsRef);
                                    let foundProduct = null;
                                    for (const docSnapshot of querySnapshot.docs){
                                        if (!docSnapshot) continue; // Defensive check
                                        const data = docSnapshot.data();
                                        if (data && data.barcode === detectedCode) {
                                            // Store the document id along with the data.
                                            foundProduct = {
                                                id: docSnapshot.id,
                                                ...data
                                            };
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
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error checking product: " + error.message);
                                }
                                setConfirmVisible(true);
                            }
                        } catch (error) {
                            console.warn("Benign error in onDetected handler:", error);
                        }
                    }
                }["ScanUpdatePage.useEffect"]);
            }
            return ({
                "ScanUpdatePage.useEffect": ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].offDetected === "function") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].offDetected();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                        }
                    } catch (error) {
                        console.warn("Error during Quagga cleanup:", error);
                    }
                }
            })["ScanUpdatePage.useEffect"];
        }
    }["ScanUpdatePage.useEffect"], [
        scanned
    ]);
    const handleSaveProduct = async ()=>{
        if (!barcode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Barcode is missing. Please scan again.");
            return;
        }
        if (!existingProduct) {
            if (!productName.trim() || !pricePerUnit.toString().trim() || quantity <= 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter valid product details (name, price per unit, and quantity).");
                return;
            }
        } else {
            if (quantity <= 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid quantity.");
                return;
            }
        }
        try {
            const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "inventory");
            if (existingProduct) {
                if (!existingProduct.id) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error: Existing product has no valid ID.");
                    return;
                }
                console.log("Updating product:", existingProduct);
                const newQuantity = (existingProduct.quantity || 0) + quantity;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "inventory", existingProduct.id), {
                    quantity: newQuantity
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product quantity updated successfully!");
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(productsRef, {
                    barcode,
                    productName: productName.toUpperCase(),
                    "price per unit": parseFloat(pricePerUnit),
                    quantity
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("New product added successfully!");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
            } catch (e) {
                if (e && e.message && e.message.includes("reading 'data'")) {
                // Suppress this error.
                } else {
                    console.error(e);
                }
            }
        } catch (error) {
            console.error("Error updating inventory:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error updating inventory: " + error.message);
        }
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
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold uppercase",
                                children: "ShopKeeper"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/update/page.js",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "You are updating your inventory"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/update/page.js",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-white-500 flex flex-col items-center py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        id: "barcode-scanner-update",
                        style: {
                            width: 320,
                            height: 240,
                            backgroundColor: "#000"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    barcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-lg",
                        children: [
                            "Scanned Barcode: ",
                            barcode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 227,
                        columnNumber: 21
                    }, this),
                    confirmVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 w-80 bg-white p-4 rounded shadow",
                        children: [
                            existingProduct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg",
                                        children: [
                                            "Product Name: ",
                                            productName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/scan/update/page.js",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg",
                                        children: [
                                            "Price Per Unit: ",
                                            pricePerUnit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/scan/update/page.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Enter Product Name",
                                        value: productName,
                                        onChange: (e)=>setProductName(e.target.value),
                                        className: "p-2 border rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/scan/update/page.js",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        placeholder: "Enter Price Per Unit",
                                        value: pricePerUnit,
                                        onChange: (e)=>setPricePerUnit(e.target.value),
                                        className: "p-2 border rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/scan/update/page.js",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Enter Quantity",
                                value: quantity,
                                onChange: (e)=>setQuantity(Number(e.target.value)),
                                className: "p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/update/page.js",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSaveProduct,
                                className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-105",
                                children: "Confirm & Save"
                            }, void 0, false, {
                                fileName: "[project]/src/app/scan/update/page.js",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/scan/update/page.js",
        lineNumber: 206,
        columnNumber: 5
    }, this);
};
_s(ScanUpdatePage, "r7dI0AknveIC9zO1rUzo7VL8iEY=");
_c = ScanUpdatePage;
const __TURBOPACK__default__export__ = ScanUpdatePage;
var _c;
__turbopack_context__.k.register(_c, "ScanUpdatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_scan_update_page_4823c85b.js.map