"use strict";
(() => {
var exports = {};
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 90730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 88374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsubmitLatePlate_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsubmitLatePlate_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/submitLatePlate.js
var submitLatePlate_namespaceObject = {};
__webpack_require__.r(submitLatePlate_namespaceObject);
__webpack_require__.d(submitLatePlate_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(56429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(47153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(37305);
;// CONCATENATED MODULE: ./pages/api/submitLatePlate.js
// Inside pages/api/submitLatePlate.js
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }
    const { selectedDate, meal, comments, selectedID, submittedBy, submissionTime } = req.body;
    try {
        const response = await fetch("https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/insertOne", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "*",
                "api-key": process.env.MONGODB_API_KEY
            },
            body: JSON.stringify({
                collection: "LatePlateRequest",
                database: "test",
                dataSource: "Cluster0",
                document: {
                    date: selectedDate,
                    mealTime: meal,
                    comments,
                    submittedBy: selectedID,
                    name: submittedBy,
                    submissionTime,
                    completed: false
                }
            })
        });
        const data = await response.json();
        console.log(data);
        if (data && data.insertedId != "") {
            res.status(200).json({
                success: true
            });
        } else {
            res.status(500).json({
                error: "Failed inserting data into MongoDB Atlas",
                details: data
            });
        }
    } catch (error) {
        console.error("Error submitting late plate request:", error.message);
        res.status(500).json({
            error: "Failed submitting late plate request"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsubmitLatePlate&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsubmitLatePlate.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsubmitLatePlate_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsubmitLatePlate_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(submitLatePlate_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(submitLatePlate_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/submitLatePlate",
        pathname: "/api/submitLatePlate",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: submitLatePlate_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(88374)));
module.exports = __webpack_exports__;

})();