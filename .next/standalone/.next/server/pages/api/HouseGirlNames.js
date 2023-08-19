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

/***/ 93514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// NAMESPACE OBJECT: ./server.js
var server_namespaceObject = {};
__webpack_require__.r(server_namespaceObject);

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: external "dotenv"
const external_dotenv_namespaceObject = require("dotenv");
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_namespaceObject);
;// CONCATENATED MODULE: ./server.js



// import apiRoutes from './routes/api';

external_dotenv_default().config();
const app = external_express_default()();
const port = process.env.PORT || 4000;
const corsOptions = {
    origin: "https://b1nh.com",
    optionsSuccessStatus: 200
};
app.use(external_cors_default()(corsOptions));
app.use(external_express_default().json());
// Use environment variable for MongoDB connection string
external_mongoose_default().connect("mongodb+srv://houseboy:binh@cluster0.edutdyo.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to MongoDB Atlas...")).catch((err)=>console.error("Could not connect to MongoDB Atlas...", err));
// Start the server
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

;// CONCATENATED MODULE: ./pages/api/HouseGirlNames.js

const HouseGirl = __webpack_require__(68644);
async function handler(req, res) {
    await (0,server_namespaceObject["default"])();
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
var __webpack_exports__ = __webpack_require__.X(0, [570], () => (__webpack_exec__(93514)));
module.exports = __webpack_exports__;

})();