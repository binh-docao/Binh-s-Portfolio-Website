(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ switch_ThemeSwitch)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/switch/ThemeSwitch.jsx




const ThemeSwitch = ()=>{
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    // useEffect only runs on the client, so now we can safely show the UI
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    const avatarImage = resolvedTheme === "dark" ? "/img/slider/1.jpg" : "/img/slider/4.jpg";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "avatar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image avatar_img",
                    style: {
                        backgroundImage: `url(${avatarImage})`
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "theme-switcher-label",
                onClick: ()=>{
                    setTheme(resolvedTheme === "dark" ? "light" : "dark");
                },
                children: resolvedTheme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaSun, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaMoon, {})
            })
        ]
    });
};
/* harmony default export */ const switch_ThemeSwitch = (ThemeSwitch);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8549);
/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_switch_ThemeSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function App({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_1___default().init({
            duration: 1200
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tokyo_tm_all_wrap",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
                attribute: "class",
                defaultTheme: "light",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_switch_ThemeSwitch__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}),
            " "
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 8549:
/***/ (() => {



/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();