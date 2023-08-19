"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getNames";
exports.ids = ["pages/api/getNames"];
exports.modules = {

/***/ "(api)/./pages/api/getNames.js":
/*!*******************************!*\
  !*** ./pages/api/getNames.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Inside pages/api/houseGirls.js\nasync function handler(req, res) {\n    try {\n        const response = await fetch(\"https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/find\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Request-Headers\": \"*\",\n                \"api-key\": process.env.MONGODB_API_KEY\n            },\n            body: JSON.stringify({\n                collection: \"housegirls\",\n                database: \"test\",\n                dataSource: \"Cluster0\",\n                projection: {\n                    \"_id\": 1,\n                    \"name\": 1\n                }\n            })\n        });\n        const data = await response.json();\n        console.log(\"Raw Data from MongoDB:\", data);\n        if (data && data.documents && Array.isArray(data.documents)) {\n            // Instead of just extracting names, return the entire object which contains _id and name\n            res.status(200).json(data.documents);\n        } else {\n            res.status(500).json({\n                error: \"Unexpected response format from MongoDB Atlas\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error fetching data:\", error.message);\n        res.status(500).json({\n            error: \"Failed fetching data from MongoDB Atlas\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmFtZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQztBQUNsQixlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDRFQUE0RTtZQUN2R0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsa0NBQWtDO2dCQUNsQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7WUFDeEM7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsWUFBWTtvQkFBRSxPQUFPO29CQUFHLFFBQVE7Z0JBQUU7WUFDcEM7UUFDRjtRQUVBLE1BQU1DLE9BQU8sTUFBTWQsU0FBU2UsSUFBSTtRQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkg7UUFFdEMsSUFBSUEsUUFBUUEsS0FBS0ksU0FBUyxJQUFJQyxNQUFNQyxPQUFPLENBQUNOLEtBQUtJLFNBQVMsR0FBRztZQUMzRCx5RkFBeUY7WUFDekZuQixJQUFJc0IsTUFBTSxDQUFDLEtBQUtOLElBQUksQ0FBQ0QsS0FBS0ksU0FBUztRQUNyQyxPQUFPO1lBQ0xuQixJQUFJc0IsTUFBTSxDQUFDLEtBQUtOLElBQUksQ0FBQztnQkFBRU8sT0FBTztZQUFnRDtRQUNoRixDQUFDO0lBRUgsRUFBRSxPQUFPQSxPQUFPO1FBQ2ROLFFBQVFNLEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1DLE9BQU87UUFDbkR4QixJQUFJc0IsTUFBTSxDQUFDLEtBQUtOLElBQUksQ0FBQztZQUFFTyxPQUFPO1FBQTBDO0lBQzFFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva3lvLW5leHRqcy8uL3BhZ2VzL2FwaS9nZXROYW1lcy5qcz9lNTRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluc2lkZSBwYWdlcy9hcGkvaG91c2VHaXJscy5qc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9kYXRhLWRzbGxqL2VuZHBvaW50L2RhdGEvdjEvYWN0aW9uL2ZpbmQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJzogJyonLFxuICAgICAgICAgICdhcGkta2V5JzogcHJvY2Vzcy5lbnYuTU9OR09EQl9BUElfS0VZLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogXCJob3VzZWdpcmxzXCIsXG4gICAgICAgICAgZGF0YWJhc2U6IFwidGVzdFwiLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IFwiQ2x1c3RlcjBcIixcbiAgICAgICAgICBwcm9qZWN0aW9uOiB7IFwiX2lkXCI6IDEsIFwibmFtZVwiOiAxIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJhdyBEYXRhIGZyb20gTW9uZ29EQjpcIiwgZGF0YSk7XG4gIFxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kb2N1bWVudHMgJiYgQXJyYXkuaXNBcnJheShkYXRhLmRvY3VtZW50cykpIHtcbiAgICAgICAgLy8gSW5zdGVhZCBvZiBqdXN0IGV4dHJhY3RpbmcgbmFtZXMsIHJldHVybiB0aGUgZW50aXJlIG9iamVjdCB3aGljaCBjb250YWlucyBfaWQgYW5kIG5hbWVcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5kb2N1bWVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gTW9uZ29EQiBBdGxhcycgfSk7XG4gICAgICB9XG4gIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCBmZXRjaGluZyBkYXRhIGZyb20gTW9uZ29EQiBBdGxhcycgfSk7XG4gICAgfVxuICB9XG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9BUElfS0VZIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJkYXRhU291cmNlIiwicHJvamVjdGlvbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNames.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNames.js"));
module.exports = __webpack_exports__;

})();