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
exports.id = "pages/api/getRestrictions";
exports.ids = ["pages/api/getRestrictions"];
exports.modules = {

/***/ "(api)/./pages/api/getRestrictions.js":
/*!**************************************!*\
  !*** ./pages/api/getRestrictions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Inside pages/api/houseGirls.js\nasync function handler(req, res) {\n    if (!req.query.name) {\n        return res.status(400).json({\n            error: \"Name query parameter is required\"\n        });\n    }\n    try {\n        const response = await fetch(\"https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/findOne\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Request-Headers\": \"*\",\n                \"api-key\": process.env.MONGODB_API_KEY\n            },\n            body: JSON.stringify({\n                collection: \"housegirls\",\n                database: \"test\",\n                dataSource: \"Cluster0\",\n                filter: {\n                    \"name\": req.query.name\n                },\n                projection: {\n                    \"_id\": 1,\n                    \"name\": 1,\n                    \"dietaryRestrictions\": 1\n                } // projecting the dietaryRestrictions\n            })\n        });\n        const data = await response.json();\n        if (!data.document) {\n            return res.status(404).json({\n                error: \"Housegirl not found\"\n            });\n        }\n        res.status(200).json(data.document.dietaryRestrictions);\n    } catch (error) {\n        res.status(500).json({\n            error: \"Failed fetching data from MongoDB Atlas\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UmVzdHJpY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7QUFFbEIsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSSxDQUFDRCxJQUFJRSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNuQixPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUM7SUFDMUUsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sK0VBQStFO1lBQzFHQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixrQ0FBa0M7Z0JBQ2xDLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtZQUN4QztZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxZQUFZO2dCQUNaQyxVQUFVO2dCQUNWQyxZQUFZO2dCQUNaQyxRQUFRO29CQUFFLFFBQVFwQixJQUFJRSxLQUFLLENBQUNDLElBQUk7Z0JBQUM7Z0JBQ2pDa0IsWUFBWTtvQkFBRSxPQUFPO29CQUFHLFFBQVE7b0JBQUcsdUJBQXVCO2dCQUFFLEVBQUUscUNBQXFDO1lBQ3JHO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1mLFNBQVNGLElBQUk7UUFHaEMsSUFBSSxDQUFDaUIsS0FBS0MsUUFBUSxFQUFFO1lBQ2xCLE9BQU90QixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCO1FBQy9ELENBQUM7UUFDR0wsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2lCLEtBQUtDLFFBQVEsQ0FBQ0MsbUJBQW1CO0lBQzFELEVBQUUsT0FBT2xCLE9BQU87UUFDZEwsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTBDO0lBQzFFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva3lvLW5leHRqcy8uL3BhZ2VzL2FwaS9nZXRSZXN0cmljdGlvbnMuanM/NmQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnNpZGUgcGFnZXMvYXBpL2hvdXNlR2lybHMuanNcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmICghcmVxLnF1ZXJ5Lm5hbWUpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTmFtZSBxdWVyeSBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQnIH0pO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2RhdGEtZHNsbGovZW5kcG9pbnQvZGF0YS92MS9hY3Rpb24vZmluZE9uZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LUhlYWRlcnMnOiAnKicsXG4gICAgICAgICAgJ2FwaS1rZXknOiBwcm9jZXNzLmVudi5NT05HT0RCX0FQSV9LRVksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBcImhvdXNlZ2lybHNcIixcbiAgICAgICAgICBkYXRhYmFzZTogXCJ0ZXN0XCIsXG4gICAgICAgICAgZGF0YVNvdXJjZTogXCJDbHVzdGVyMFwiLFxuICAgICAgICAgIGZpbHRlcjogeyBcIm5hbWVcIjogcmVxLnF1ZXJ5Lm5hbWUgfSwgLy8gZmlsdGVyIGJ5IHRoZSBob3VzZWdpcmwncyBuYW1lXG4gICAgICAgICAgcHJvamVjdGlvbjogeyBcIl9pZFwiOiAxLCBcIm5hbWVcIjogMSwgXCJkaWV0YXJ5UmVzdHJpY3Rpb25zXCI6IDEgfSAvLyBwcm9qZWN0aW5nIHRoZSBkaWV0YXJ5UmVzdHJpY3Rpb25zXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cbiAgICAgIGlmICghZGF0YS5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0hvdXNlZ2lybCBub3QgZm91bmQnIH0pO1xuICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5kb2N1bWVudC5kaWV0YXJ5UmVzdHJpY3Rpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCBmZXRjaGluZyBkYXRhIGZyb20gTW9uZ29EQiBBdGxhcycgfSk7XG4gICAgfVxuICB9XG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJuYW1lIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9BUElfS0VZIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJkYXRhU291cmNlIiwiZmlsdGVyIiwicHJvamVjdGlvbiIsImRhdGEiLCJkb2N1bWVudCIsImRpZXRhcnlSZXN0cmljdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRestrictions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getRestrictions.js"));
module.exports = __webpack_exports__;

})();