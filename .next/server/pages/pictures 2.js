"use strict";
(() => {
var exports = {};
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 1456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const Pictures = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const redirectLink = "https://binh.pic-time.com/portfolio";
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        router.push(redirectLink);
    }, [
        router,
        redirectLink
    ]);
    return null; // Render nothing in the component since it will immediately redirect
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pictures);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1456));
module.exports = __webpack_exports__;

})();