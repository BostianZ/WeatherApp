/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherConditionsData.js */ "./src/weatherConditionsData.js");


function Utils() {
   const findIconCode = (str) => {
       let condition = _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_0__.conditions.find(condi => {
            return condi.day === str ? condi : false;
       })
       return condition.icon;
    }
    return { findIconCode }
}



/***/ }),

/***/ "./src/weatherConditionsData.js":
/*!**************************************!*\
  !*** ./src/weatherConditionsData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conditions: () => (/* binding */ conditions)
/* harmony export */ });
const conditions = [
    {
        "code" : 1000,
        "day" : "Sunny",
        "night" : "Clear",
        "icon" : 113
    },
    {
        "code" : 1003,
        "day" : "Partly cloudy",
        "night" : "Partly cloudy",
        "icon" : 116
    },
    {
        "code" : 1006,
        "day" : "Cloudy",
        "night" : "Cloudy",
        "icon" : 119
    },
    {
        "code" : 1009,
        "day" : "Overcast",
        "night" : "Overcast",
        "icon" : 122
    },
    {
        "code" : 1030,
        "day" : "Mist",
        "night" : "Mist",
        "icon" : 143
    },
    {
        "code" : 1063,
        "day" : "Patchy rain possible",
        "night" : "Patchy rain possible",
        "icon" : 176
    },
    {
        "code" : 1066,
        "day" : "Patchy snow possible",
        "night" : "Patchy snow possible",
        "icon" : 179
    },
    {
        "code" : 1069,
        "day" : "Patchy sleet possible",
        "night" : "Patchy sleet possible",
        "icon" : 182
    },
    {
        "code" : 1072,
        "day" : "Patchy freezing drizzle possible",
        "night" : "Patchy freezing drizzle possible",
        "icon" : 185
    },
    {
        "code" : 1087,
        "day" : "Thundery outbreaks possible",
        "night" : "Thundery outbreaks possible",
        "icon" : 200
    },
    {
        "code" : 1114,
        "day" : "Blowing snow",
        "night" : "Blowing snow",
        "icon" : 227
    },
    {
        "code" : 1117,
        "day" : "Blizzard",
        "night" : "Blizzard",
        "icon" : 230
    },
    {
        "code" : 1135,
        "day" : "Fog",
        "night" : "Fog",
        "icon" : 248
    },
    {
        "code" : 1147,
        "day" : "Freezing fog",
        "night" : "Freezing fog",
        "icon" : 260
    },
    {
        "code" : 1150,
        "day" : "Patchy light drizzle",
        "night" : "Patchy light drizzle",
        "icon" : 263
    },
    {
        "code" : 1153,
        "day" : "Light drizzle",
        "night" : "Light drizzle",
        "icon" : 266
    },
    {
        "code" : 1168,
        "day" : "Freezing drizzle",
        "night" : "Freezing drizzle",
        "icon" : 281
    },
    {
        "code" : 1171,
        "day" : "Heavy freezing drizzle",
        "night" : "Heavy freezing drizzle",
        "icon" : 284
    },
    {
        "code" : 1180,
        "day" : "Patchy light rain",
        "night" : "Patchy light rain",
        "icon" : 293
    },
    {
        "code" : 1183,
        "day" : "Light rain",
        "night" : "Light rain",
        "icon" : 296
    },
    {
        "code" : 1186,
        "day" : "Moderate rain at times",
        "night" : "Moderate rain at times",
        "icon" : 299
    },
    {
        "code" : 1189,
        "day" : "Moderate rain",
        "night" : "Moderate rain",
        "icon" : 302
    },
    {
        "code" : 1192,
        "day" : "Heavy rain at times",
        "night" : "Heavy rain at times",
        "icon" : 305
    },
    {
        "code" : 1195,
        "day" : "Heavy rain",
        "night" : "Heavy rain",
        "icon" : 308
    },
    {
        "code" : 1198,
        "day" : "Light freezing rain",
        "night" : "Light freezing rain",
        "icon" : 311
    },
    {
        "code" : 1201,
        "day" : "Moderate or heavy freezing rain",
        "night" : "Moderate or heavy freezing rain",
        "icon" : 314
    },
    {
        "code" : 1204,
        "day" : "Light sleet",
        "night" : "Light sleet",
        "icon" : 317
    },
    {
        "code" : 1207,
        "day" : "Moderate or heavy sleet",
        "night" : "Moderate or heavy sleet",
        "icon" : 320
    },
    {
        "code" : 1210,
        "day" : "Patchy light snow",
        "night" : "Patchy light snow",
        "icon" : 323
    },
    {
        "code" : 1213,
        "day" : "Light snow",
        "night" : "Light snow",
        "icon" : 326
    },
    {
        "code" : 1216,
        "day" : "Patchy moderate snow",
        "night" : "Patchy moderate snow",
        "icon" : 329
    },
    {
        "code" : 1219,
        "day" : "Moderate snow",
        "night" : "Moderate snow",
        "icon" : 332
    },
    {
        "code" : 1222,
        "day" : "Patchy heavy snow",
        "night" : "Patchy heavy snow",
        "icon" : 335
    },
    {
        "code" : 1225,
        "day" : "Heavy snow",
        "night" : "Heavy snow",
        "icon" : 338
    },
    {
        "code" : 1237,
        "day" : "Ice pellets",
        "night" : "Ice pellets",
        "icon" : 350
    },
    {
        "code" : 1240,
        "day" : "Light rain shower",
        "night" : "Light rain shower",
        "icon" : 353
    },
    {
        "code" : 1243,
        "day" : "Moderate or heavy rain shower",
        "night" : "Moderate or heavy rain shower",
        "icon" : 356
    },
    {
        "code" : 1246,
        "day" : "Torrential rain shower",
        "night" : "Torrential rain shower",
        "icon" : 359
    },
    {
        "code" : 1249,
        "day" : "Light sleet showers",
        "night" : "Light sleet showers",
        "icon" : 362
    },
    {
        "code" : 1252,
        "day" : "Moderate or heavy sleet showers",
        "night" : "Moderate or heavy sleet showers",
        "icon" : 365
    },
    {
        "code" : 1255,
        "day" : "Light snow showers",
        "night" : "Light snow showers",
        "icon" : 368
    },
    {
        "code" : 1258,
        "day" : "Moderate or heavy snow showers",
        "night" : "Moderate or heavy snow showers",
        "icon" : 371
    },
    {
        "code" : 1261,
        "day" : "Light showers of ice pellets",
        "night" : "Light showers of ice pellets",
        "icon" : 374
    },
    {
        "code" : 1264,
        "day" : "Moderate or heavy showers of ice pellets",
        "night" : "Moderate or heavy showers of ice pellets",
        "icon" : 377
    },
    {
        "code" : 1273,
        "day" : "Patchy light rain with thunder",
        "night" : "Patchy light rain with thunder",
        "icon" : 386
    },
    {
        "code" : 1276,
        "day" : "Moderate or heavy rain with thunder",
        "night" : "Moderate or heavy rain with thunder",
        "icon" : 389
    },
    {
        "code" : 1279,
        "day" : "Patchy light snow with thunder",
        "night" : "Patchy light snow with thunder",
        "icon" : 392
    },
    {
        "code" : 1282,
        "day" : "Moderate or heavy snow with thunder",
        "night" : "Moderate or heavy snow with thunder",
        "icon" : 395
    }
]



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


function WeatherApp() {
  const key = "61161e24db5f47359e3124010232212";
  const fetchCurrentWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`,
        {
          mode: "cors",
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchCurrentWeatherData
  };
}

function ViewController() {
  const utils = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.Utils)();
  const weatherApp = WeatherApp();
  const searchBtn = document.querySelector(".location-search-btn");
  const searchInput = document.querySelector(".location-input");

  //Show some sort of loading icon/modal while async data loads to be displayed

  const renderWeatherData = (data) => {
    const iconEl = document.querySelector(".icon");
    const degreesEl = document.querySelector(".degrees");
    const locationEl = document.querySelector(".location");
    const timeEl = document.querySelector(".time");
    const dateEl = document.querySelector(".date");
    const iconCode = utils.findIconCode(data.current.condition.text);
    
    degreesEl.textContent = `${Math.round(data.current.temp_f)} F`;
    locationEl.textContent = data.location.name;
    timeEl.textContent = data.location.localtime;
    iconEl.src = `../dist/icons/day/${iconCode}.png`
    //Find our own weather icons, make a function that takes the weather text
    //pass weather text throiugh function, use a switch to see if its cloudy, overcast, rainy, etc
    //return image src as value and stick it into the icon src image
  
    console.log("RENDER", data);
  };

  const searchHandler = async () => {
    const loadingEl = document.querySelector(".loading");
    const data = await weatherApp.fetchCurrentWeatherData(searchInput.value);
    renderWeatherData(data);
  };

  const defaultRender = async () => {
    const data = await weatherApp.fetchCurrentWeatherData("new york");
    renderWeatherData(data);
  }

  searchBtn.addEventListener("click", searchHandler);

  defaultRender();
}

ViewController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlFQUFVO0FBQ2pDO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJLEtBQUssU0FBUztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25kaXRpb25zIH0gZnJvbSBcIi4vd2VhdGhlckNvbmRpdGlvbnNEYXRhLmpzXCJcclxuXHJcbmZ1bmN0aW9uIFV0aWxzKCkge1xyXG4gICBjb25zdCBmaW5kSWNvbkNvZGUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICBsZXQgY29uZGl0aW9uID0gY29uZGl0aW9ucy5maW5kKGNvbmRpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmRpLmRheSA9PT0gc3RyID8gY29uZGkgOiBmYWxzZTtcclxuICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4gY29uZGl0aW9uLmljb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBmaW5kSWNvbkNvZGUgfVxyXG59XHJcblxyXG5leHBvcnQgeyBVdGlscyB9OyIsImNvbnN0IGNvbmRpdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDAwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlN1bm55XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJDbGVhclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTEzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAwMyxcclxuICAgICAgICBcImRheVwiIDogXCJQYXJ0bHkgY2xvdWR5XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXJ0bHkgY2xvdWR5XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDA2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkNsb3VkeVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQ2xvdWR5XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDA5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk92ZXJjYXN0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJPdmVyY2FzdFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTIyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAzMCxcclxuICAgICAgICBcImRheVwiIDogXCJNaXN0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNaXN0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxNDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDYzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTc2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA2NixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE3OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNjksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNzIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxODVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDg3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTE0LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkJsb3dpbmcgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQmxvd2luZyBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTE3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkJsaXp6YXJkXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJCbGl6emFyZFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTEzNSxcclxuICAgICAgICBcImRheVwiIDogXCJGb2dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZvZ1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjQ4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE0NyxcclxuICAgICAgICBcImRheVwiIDogXCJGcmVlemluZyBmb2dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZyZWV6aW5nIGZvZ1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE1MCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI2M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNTMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE2OCxcclxuICAgICAgICBcImRheVwiIDogXCJGcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJGcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyODFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTcxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI4NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyOTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTgzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDI5NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjk5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4OSxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTkyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcImljb25cIiA6IDMwNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExOTUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE5OCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjAxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMxNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc2xlZXRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNsZWV0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMTdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjA3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxMCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzI2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxNixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMyOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIyMixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMzNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMjUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzM4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIzNyxcclxuICAgICAgICBcImRheVwiIDogXCJJY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzU2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0NixcclxuICAgICAgICBcImRheVwiIDogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQ5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcImljb25cIiA6IDM2MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNTIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzY1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1NSxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzY4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1OCxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzcxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI2MSxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNzRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjY0LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM3N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM4NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzODlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjc5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzOTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjgyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzk1XHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCB7IGNvbmRpdGlvbnMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gV2VhdGhlckFwcCgpIHtcclxuICBjb25zdCBrZXkgPSBcIjYxMTYxZTI0ZGI1ZjQ3MzU5ZTMxMjQwMTAyMzIyMTJcIjtcclxuICBjb25zdCBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz03YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGFcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcclxuICBjb25zdCB1dGlscyA9IFV0aWxzKCk7XHJcbiAgY29uc3Qgd2VhdGhlckFwcCA9IFdlYXRoZXJBcHAoKTtcclxuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXNlYXJjaC1idG5cIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xyXG5cclxuICAvL1Nob3cgc29tZSBzb3J0IG9mIGxvYWRpbmcgaWNvbi9tb2RhbCB3aGlsZSBhc3luYyBkYXRhIGxvYWRzIHRvIGJlIGRpc3BsYXllZFxyXG5cclxuICBjb25zdCByZW5kZXJXZWF0aGVyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XHJcbiAgICBjb25zdCBkZWdyZWVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZ3JlZXNcIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcclxuICAgIGNvbnN0IHRpbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZVwiKTtcclxuICAgIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcclxuICAgIGNvbnN0IGljb25Db2RlID0gdXRpbHMuZmluZEljb25Db2RlKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XHJcbiAgICBcclxuICAgIGRlZ3JlZXNFbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IEZgO1xyXG4gICAgbG9jYXRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgIHRpbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xyXG4gICAgaWNvbkVsLnNyYyA9IGAuLi9kaXN0L2ljb25zL2RheS8ke2ljb25Db2RlfS5wbmdgXHJcbiAgICAvL0ZpbmQgb3VyIG93biB3ZWF0aGVyIGljb25zLCBtYWtlIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgd2VhdGhlciB0ZXh0XHJcbiAgICAvL3Bhc3Mgd2VhdGhlciB0ZXh0IHRocm9pdWdoIGZ1bmN0aW9uLCB1c2UgYSBzd2l0Y2ggdG8gc2VlIGlmIGl0cyBjbG91ZHksIG92ZXJjYXN0LCByYWlueSwgZXRjXHJcbiAgICAvL3JldHVybiBpbWFnZSBzcmMgYXMgdmFsdWUgYW5kIHN0aWNrIGl0IGludG8gdGhlIGljb24gc3JjIGltYWdlXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhcIlJFTkRFUlwiLCBkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGluZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcHAuZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4gICAgcmVuZGVyV2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFJlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKFwibmV3IHlvcmtcIik7XHJcbiAgICByZW5kZXJXZWF0aGVyRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoSGFuZGxlcik7XHJcblxyXG4gIGRlZmF1bHRSZW5kZXIoKTtcclxufVxyXG5cclxuVmlld0NvbnRyb2xsZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9