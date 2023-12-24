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

    //Need to determine if night or not
    //If night then use night icons
    //If day use day icons
   const findIconCode = (str) => {
       let condition = _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_0__.conditions.find(condi => {
            return condi.day === str ? condi : false;
       })
       return condition.icon;
    }

    const formatTime = (time) => {
        let formattedTime = time.substring(11, 13)
        console.log(time);
        console.log(formattedTime)
        debugger;
        if (formattedTime.includes(":")) {
            formattedTime = formattedTime.substring(0,1);
        }

        if (formattedTime > 12) {
            //PM
            //-12 to account for military time
            formattedTime = formattedTime - 12
            time = time.substring(0, 10) + " " + formattedTime + time.substring(13);
            return time.concat(" ", "PM");
        } else if(formattedTime < 12) {
            //AM
            return time.concat(" ", "AM")
        }
    }

    return { findIconCode, formatTime }
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
    const currentWeather = document.querySelector(".current-weather");
    // const dateEl = document.querySelector(".date");
    const iconCode = utils.findIconCode(data.current.condition.text);
    const formattedTime = utils.formatTime(data.location.localtime)
    console.log(data.current.condition.text);
    degreesEl.textContent = `${Math.round(data.current.temp_f)} F`;
    locationEl.textContent = data.location.name;
    timeEl.textContent = formattedTime;
    currentWeather.textContent = data.current.condition.text;
    iconEl.src = `../dist/icons/day/${iconCode}.png`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQVU7QUFDakM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsU0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSSxLQUFLLFNBQVM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25kaXRpb25zIH0gZnJvbSBcIi4vd2VhdGhlckNvbmRpdGlvbnNEYXRhLmpzXCJcclxuXHJcbmZ1bmN0aW9uIFV0aWxzKCkge1xyXG5cclxuICAgIC8vTmVlZCB0byBkZXRlcm1pbmUgaWYgbmlnaHQgb3Igbm90XHJcbiAgICAvL0lmIG5pZ2h0IHRoZW4gdXNlIG5pZ2h0IGljb25zXHJcbiAgICAvL0lmIGRheSB1c2UgZGF5IGljb25zXHJcbiAgIGNvbnN0IGZpbmRJY29uQ29kZSA9IChzdHIpID0+IHtcclxuICAgICAgIGxldCBjb25kaXRpb24gPSBjb25kaXRpb25zLmZpbmQoY29uZGkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZGkuZGF5ID09PSBzdHIgPyBjb25kaSA6IGZhbHNlO1xyXG4gICAgICAgfSlcclxuICAgICAgIHJldHVybiBjb25kaXRpb24uaWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkVGltZSA9IHRpbWUuc3Vic3RyaW5nKDExLCAxMylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRUaW1lKVxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChmb3JtYXR0ZWRUaW1lLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0dGVkVGltZS5zdWJzdHJpbmcoMCwxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmb3JtYXR0ZWRUaW1lID4gMTIpIHtcclxuICAgICAgICAgICAgLy9QTVxyXG4gICAgICAgICAgICAvLy0xMiB0byBhY2NvdW50IGZvciBtaWxpdGFyeSB0aW1lXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFRpbWUgPSBmb3JtYXR0ZWRUaW1lIC0gMTJcclxuICAgICAgICAgICAgdGltZSA9IHRpbWUuc3Vic3RyaW5nKDAsIDEwKSArIFwiIFwiICsgZm9ybWF0dGVkVGltZSArIHRpbWUuc3Vic3RyaW5nKDEzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWUuY29uY2F0KFwiIFwiLCBcIlBNXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZihmb3JtYXR0ZWRUaW1lIDwgMTIpIHtcclxuICAgICAgICAgICAgLy9BTVxyXG4gICAgICAgICAgICByZXR1cm4gdGltZS5jb25jYXQoXCIgXCIsIFwiQU1cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgZmluZEljb25Db2RlLCBmb3JtYXRUaW1lIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVXRpbHMgfTsiLCJjb25zdCBjb25kaXRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAwMCxcclxuICAgICAgICBcImRheVwiIDogXCJTdW5ueVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQ2xlYXJcIixcclxuICAgICAgICBcImljb25cIiA6IDExM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGFydGx5IGNsb3VkeVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGFydGx5IGNsb3VkeVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTE2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAwNixcclxuICAgICAgICBcImRheVwiIDogXCJDbG91ZHlcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkNsb3VkeVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAwOSxcclxuICAgICAgICBcImRheVwiIDogXCJPdmVyY2FzdFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiT3ZlcmNhc3RcIixcclxuICAgICAgICBcImljb25cIiA6IDEyMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMzAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTWlzdFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTWlzdFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTQzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA2MyxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE3NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNjYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxNzlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDY5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxODJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDcyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTg1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA4NyxcclxuICAgICAgICBcImRheVwiIDogXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTExNCxcclxuICAgICAgICBcImRheVwiIDogXCJCbG93aW5nIHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkJsb3dpbmcgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjI3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTExNyxcclxuICAgICAgICBcImRheVwiIDogXCJCbGl6emFyZFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQmxpenphcmRcIixcclxuICAgICAgICBcImljb25cIiA6IDIzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExMzUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiRm9nXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJGb2dcIixcclxuICAgICAgICBcImljb25cIiA6IDI0OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNDcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiRnJlZXppbmcgZm9nXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJGcmVlemluZyBmb2dcIixcclxuICAgICAgICBcImljb25cIiA6IDI2MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNTAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTUzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNjgsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiRnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiRnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjgxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE3MSxcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyODRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTgwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjkzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4MyxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyOTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTg2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcImljb25cIiA6IDI5OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE5MixcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTk1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMwOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExOTgsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzExXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIwMSxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMTRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjA0LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNsZWV0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzbGVldFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzE3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIwNyxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcclxuICAgICAgICBcImljb25cIiA6IDMyMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjEzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMyNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjE5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMjIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMzVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjI1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IHNub3dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMzOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMzcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSWNlIHBlbGxldHNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0MyxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM1NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzU5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0OSxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjUyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcImljb25cIiA6IDM2NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNTUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcImljb25cIiA6IDM2OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNTgsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcImljb25cIiA6IDM3MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNjEsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzc0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI2NCxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNzdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjczLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzODZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjc2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzg5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI3OSxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzkyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI4MixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM5NVxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgeyBjb25kaXRpb25zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIFdlYXRoZXJBcHAoKSB7XHJcbiAgY29uc3Qga2V5ID0gXCI2MTE2MWUyNGRiNWY0NzM1OWUzMTI0MDEwMjMyMjEyXCI7XHJcbiAgY29uc3QgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7bG9jYXRpb259JmRheXM9N2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoQ3VycmVudFdlYXRoZXJEYXRhXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gVmlld0NvbnRyb2xsZXIoKSB7XHJcbiAgY29uc3QgdXRpbHMgPSBVdGlscygpO1xyXG4gIGNvbnN0IHdlYXRoZXJBcHAgPSBXZWF0aGVyQXBwKCk7XHJcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1zZWFyY2gtYnRuXCIpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pbnB1dFwiKTtcclxuXHJcbiAgLy9TaG93IHNvbWUgc29ydCBvZiBsb2FkaW5nIGljb24vbW9kYWwgd2hpbGUgYXN5bmMgZGF0YSBsb2FkcyB0byBiZSBkaXNwbGF5ZWRcclxuXHJcbiAgY29uc3QgcmVuZGVyV2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xyXG4gICAgY29uc3QgZGVncmVlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XHJcbiAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyXCIpO1xyXG4gICAgLy8gY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG4gICAgY29uc3QgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSB1dGlscy5mb3JtYXRUaW1lKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKVxyXG4gICAgY29uc29sZS5sb2coZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcclxuICAgIGRlZ3JlZXNFbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IEZgO1xyXG4gICAgbG9jYXRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgIHRpbWVFbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFRpbWU7XHJcbiAgICBjdXJyZW50V2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgIGljb25FbC5zcmMgPSBgLi4vZGlzdC9pY29ucy9kYXkvJHtpY29uQ29kZX0ucG5nYFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwcC5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICByZW5kZXJXZWF0aGVyRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWZhdWx0UmVuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcHAuZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEoXCJuZXcgeW9ya1wiKTtcclxuICAgIHJlbmRlcldlYXRoZXJEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hIYW5kbGVyKTtcclxuXHJcbiAgZGVmYXVsdFJlbmRlcigpO1xyXG59XHJcblxyXG5WaWV3Q29udHJvbGxlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=