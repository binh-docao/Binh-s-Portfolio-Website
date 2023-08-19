(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 14138:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 14138;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 60871:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 71239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 66860:
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 84269:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 16464:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 39512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 68644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const mongoose = __webpack_require__(79570);
const latePlateRequestSchema = new mongoose.Schema({
    date: Date,
    mealTime: String,
    comments: String,
    completed: Boolean,
    adminComments: String
});
const houseGirlSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    dietaryRestrictions: [
        String
    ],
    latePlateRequests: [
        latePlateRequestSchema
    ]
});
const HouseGirl = mongoose.model("HouseGirl", houseGirlSchema);
module.exports = HouseGirl;


/***/ }),

/***/ 80067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const express = __webpack_require__(66860);
const HouseGirl = __webpack_require__(68644);
async function handler(req, res) {
    try {
        const houseGirls = await HouseGirl.find({}, "name"); // Select only the 'name' field from the HouseGirl model
        res.status(200).send(houseGirls);
    } catch (error) {
        res.status(500).send(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [570], () => (__webpack_exec__(80067)));
module.exports = __webpack_exports__;

})();