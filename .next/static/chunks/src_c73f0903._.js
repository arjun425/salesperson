(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c73f0903._.js", {

"[project]/src/firebase/firebaseConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "app": (()=>app),
    "auth": (()=>auth),
    "database": (()=>database),
    "db": (()=>db),
    "firebaseConfig": (()=>firebaseConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$e84cf44d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-e84cf44d.js [app-client] (ecmascript) <export o as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl2JppV838_TGQ7akVeCi_aubcvrAl9nw",
    authDomain: "invenapp-a4191.firebaseapp.com",
    projectId: "invenapp-a4191",
    storageBucket: "invenapp-a4191.appspot.com",
    messagingSenderId: "1061867595172",
    appId: "1:1061867595172:web:527ad9b97eff34a621cd31",
    measurementId: "G-SJXX8VGJGX"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$e84cf44d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__["getAuth"])(app);
const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firebaseConfig.js [app-client] (ecmascript)"); // Ensure firebaseConfig.js exports { db }
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
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [scanned, setScanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmVisible, setConfirmVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize Quagga and listen for barcode detection.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanUpdatePage.useEffect": ()=>{
            // Get the scanner container element by its ID.
            const scannerContainer = document.getElementById("barcode-scanner-update");
            if (!scannerContainer) return;
            // Initialize Quagga only if we haven't scanned yet.
            if (!scanned) {
                // Initialize Quagga with our configuration.
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
                            console.error("Quagga init error:", err);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error initializing scanner: " + err.message);
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
                    }
                }["ScanUpdatePage.useEffect"]);
                // Listen for detected barcodes.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onDetected({
                    "ScanUpdatePage.useEffect": (data)=>{
                        const detectedCode = data.codeResult.code;
                        if (!scanned) {
                            setBarcode(detectedCode);
                            setScanned(true);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                            setConfirmVisible(true);
                        }
                    }
                }["ScanUpdatePage.useEffect"]);
            }
            // Cleanup function.
            return ({
                "ScanUpdatePage.useEffect": ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].offDetected === "function") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].offDetected();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                    }
                }
            })["ScanUpdatePage.useEffect"];
        }
    }["ScanUpdatePage.useEffect"], [
        scanned
    ]);
    const handleSaveProduct = async ()=>{
        if (!barcode || !productName || quantity <= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter valid product details.");
            return;
        }
        try {
            // Reference to the "inventory" collection.
            const productsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "inventory");
            // Query existing products to see if this barcode already exists.
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(productsRef);
            let productExists = false;
            querySnapshot.forEach((docSnapshot)=>{
                const data = docSnapshot.data();
                if (data.barcode === barcode) {
                    // Use the document reference to update quantity.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docSnapshot.ref, {
                        quantity: data.quantity + quantity
                    });
                    productExists = true;
                }
            });
            if (!productExists) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(productsRef, {
                    barcode,
                    productName,
                    quantity
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product updated successfully!");
            // Reset states for next scan.
            setBarcode("");
            setProductName("");
            setQuantity(1);
            setScanned(false);
            setConfirmVisible(false);
            // Restart scanning.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
        } catch (error) {
            console.error("Error updating inventory:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error updating inventory: " + error.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Scan for Update"
            }, void 0, false, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "barcode-scanner-update",
                className: "w-80 h-60 bg-black mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            barcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Scanned Barcode: ",
                    barcode
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 115,
                columnNumber: 19
            }, this),
            confirmVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 mt-4 w-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Enter Product Name",
                        value: productName,
                        onChange: (e)=>setProductName(e.target.value),
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        placeholder: "Enter Quantity",
                        value: quantity,
                        onChange: (e)=>setQuantity(Number(e.target.value)),
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSaveProduct,
                        className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-105",
                        children: "Confirm & Save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/update/page.js",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/update/page.js",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/scan/update/page.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
};
_s(ScanUpdatePage, "LLerZgG84vya2TLwnvwsPtyTHfA=");
_c = ScanUpdatePage;
const __TURBOPACK__default__export__ = ScanUpdatePage;
var _c;
__turbopack_context__.k.register(_c, "ScanUpdatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c73f0903._.js.map