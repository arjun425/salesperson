(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1a24a39a._.js", {

"[project]/src/firebase/firebaseConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/firebase/firebaseConfig.js
__turbopack_context__.s({
    "firebaseConfig": (()=>firebaseConfig)
});
const firebaseConfig = {
    apiKey: "AIzaSyBl2JppV838_TGQ7akVeCi_aubcvrAl9nw",
    authDomain: "invenapp-a4191.firebaseapp.com",
    projectId: "invenapp-a4191",
    storageBucket: "invenapp-a4191.appspot.com",
    messagingSenderId: "1061867595172",
    appId: "1:1061867595172:web:527ad9b97eff34a621cd31",
    measurementId: "G-SJXX8VGJGX",
    databaseURL: "https://invenapp-a4191-default-rtdb.firebaseio.com/"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/scan/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScanPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/quagga/dist/quagga.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firebaseConfig.js [app-client] (ecmascript)"); // Adjust the import path if needed
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Initialize Firebase and get a reference to the Realtime Database.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseConfig"]);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])();
function ScanPage() {
    _s();
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scanned, setScanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanPage.useEffect": ()=>{
            if (!scanned) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                    inputStream: {
                        type: "LiveStream",
                        constraints: {
                            width: 640,
                            height: 480,
                            facingMode: "environment"
                        }
                    },
                    decoder: {
                        readers: [
                            "ean_reader",
                            "upc_reader"
                        ]
                    }
                }, {
                    "ScanPage.useEffect": (err)=>{
                        if (err) {
                            console.error("Error initializing scanner:", err);
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
                    }
                }["ScanPage.useEffect"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onDetected({
                    "ScanPage.useEffect": (data)=>{
                        if (!scanned) {
                            setBarcode(data.codeResult.code);
                            setScanned(true);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stop();
                        }
                    }
                }["ScanPage.useEffect"]);
            }
        }
    }["ScanPage.useEffect"], [
        scanned
    ]);
    const handleConfirm = async ()=>{
        if (!barcode || !productName) {
            alert("Both barcode and product name are required!");
            return;
        }
        try {
            const productRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(db, `inventory/${barcode}`);
            console.log("Saving product:", {
                barcode,
                name: productName
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(productRef, {
                barcode,
                name: productName
            });
            alert(`Product "${productName}" saved successfully!`);
            setBarcode(null);
            setProductName("");
            setScanned(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$quagga$2f$dist$2f$quagga$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
        } catch (error) {
            console.error("Error saving product:", error);
            alert("Failed to save product.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Scan Product"
            }, void 0, false, {
                fileName: "[project]/src/app/scan/page.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            barcode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Scanned Barcode: ",
                            barcode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/scan/page.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Enter Product Name",
                        value: productName,
                        onChange: (e)=>setProductName(e.target.value),
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/page.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConfirm,
                        className: "mt-2 bg-blue-500 text-white py-2 px-4 rounded",
                        children: "Confirm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/scan/page.js",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/scan/page.js",
                lineNumber: 75,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No barcode detected yet."
            }, void 0, false, {
                fileName: "[project]/src/app/scan/page.js",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/scan/page.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ScanPage, "+k0je0zgg238w4FyvoiaG+Om/co=");
_c = ScanPage;
var _c;
__turbopack_context__.k.register(_c, "ScanPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1a24a39a._.js.map