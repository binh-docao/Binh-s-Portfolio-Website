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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Inside pages/api/houseGirls.js\nasync function handler(req, res) {\n    if (!req.query.name) {\n        return res.status(400).json({\n            error: \"Name query parameter is required\"\n        });\n    }\n    try {\n        const response = await fetch(\"https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/findOne\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": `Bearer ${process.env.MONGODB_API_KEY}` // Use your API key here\n            },\n            body: JSON.stringify({\n                collection: \"housegirls\",\n                database: \"test\",\n                dataSource: \"Cluster0\",\n                filter: {\n                    \"name\": req.query.name\n                },\n                projection: {\n                    \"_id\": 1,\n                    \"name\": 1,\n                    \"dietaryRestrictions\": 1\n                } // projecting the dietaryRestrictions\n            })\n        });\n        const data = await response.json();\n        if (data.length === 0) {\n            return res.status(404).json({\n                error: \"Housegirl not found\"\n            });\n        }\n        res.status(200).json(data[0].dietaryRestrictions); // Assuming the dietaryRestrictions is an array or object.\n    } catch (error) {\n        res.status(500).json({\n            error: \"Failed fetching data from MongoDB Atlas\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UmVzdHJpY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7QUFFbEIsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSSxDQUFDRCxJQUFJRSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNuQixPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUM7SUFDMUUsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sK0VBQStFO1lBQzFHQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDLENBQUMsQ0FBRSx3QkFBd0I7WUFDcEY7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsUUFBUTtvQkFBRSxRQUFRcEIsSUFBSUUsS0FBSyxDQUFDQyxJQUFJO2dCQUFDO2dCQUNqQ2tCLFlBQVk7b0JBQUUsT0FBTztvQkFBRyxRQUFRO29CQUFHLHVCQUF1QjtnQkFBRSxFQUFFLHFDQUFxQztZQUNyRztRQUNGO1FBRUEsTUFBTUMsT0FBTyxNQUFNZixTQUFTRixJQUFJO1FBRWhDLElBQUlpQixLQUFLQyxNQUFNLEtBQUssR0FBRztZQUNyQixPQUFPdEIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUM3RCxDQUFDO1FBRURMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNpQixJQUFJLENBQUMsRUFBRSxDQUFDRSxtQkFBbUIsR0FBSSwwREFBMEQ7SUFDaEgsRUFBRSxPQUFPbEIsT0FBTztRQUNkTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBMEM7SUFDMUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9reW8tbmV4dGpzLy4vcGFnZXMvYXBpL2dldFJlc3RyaWN0aW9ucy5qcz82ZDAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluc2lkZSBwYWdlcy9hcGkvaG91c2VHaXJscy5qc1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKCFyZXEucXVlcnkubmFtZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdOYW1lIHF1ZXJ5IHBhcmFtZXRlciBpcyByZXF1aXJlZCcgfSk7XG4gICAgfVxuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYXRhLm1vbmdvZGItYXBpLmNvbS9hcHAvZGF0YS1kc2xsai9lbmRwb2ludC9kYXRhL3YxL2FjdGlvbi9maW5kT25lJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTU9OR09EQl9BUElfS0VZfWAgIC8vIFVzZSB5b3VyIEFQSSBrZXkgaGVyZVxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogXCJob3VzZWdpcmxzXCIsXG4gICAgICAgICAgZGF0YWJhc2U6IFwidGVzdFwiLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IFwiQ2x1c3RlcjBcIixcbiAgICAgICAgICBmaWx0ZXI6IHsgXCJuYW1lXCI6IHJlcS5xdWVyeS5uYW1lIH0sIC8vIGZpbHRlciBieSB0aGUgaG91c2VnaXJsJ3MgbmFtZVxuICAgICAgICAgIHByb2plY3Rpb246IHsgXCJfaWRcIjogMSwgXCJuYW1lXCI6IDEsIFwiZGlldGFyeVJlc3RyaWN0aW9uc1wiOiAxIH0gLy8gcHJvamVjdGluZyB0aGUgZGlldGFyeVJlc3RyaWN0aW9uc1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSG91c2VnaXJsIG5vdCBmb3VuZCcgfSk7XG4gICAgICB9XG4gIFxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YVswXS5kaWV0YXJ5UmVzdHJpY3Rpb25zKTsgIC8vIEFzc3VtaW5nIHRoZSBkaWV0YXJ5UmVzdHJpY3Rpb25zIGlzIGFuIGFycmF5IG9yIG9iamVjdC5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCBmZXRjaGluZyBkYXRhIGZyb20gTW9uZ29EQiBBdGxhcycgfSk7XG4gICAgfVxuICB9XG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJuYW1lIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9BUElfS0VZIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJkYXRhU291cmNlIiwiZmlsdGVyIiwicHJvamVjdGlvbiIsImRhdGEiLCJsZW5ndGgiLCJkaWV0YXJ5UmVzdHJpY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRestrictions.js\n");

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