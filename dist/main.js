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
        let formattedHours = time.substring(11, 13)

        if (formattedHours.includes(":")) {
            formattedHours = formattedHours.substring(0,1);
        }

        if (formattedHours > 12) {
            //PM
            //-12 to account for military time
            formattedHours = formattedHours - 12
            time = time.substring(0, 10) + " " + formattedHours + time.substring(13);
            return time.concat(" ", "PM");
        } else if(formattedHours < 12) {
            //AM
            return time.concat(" ", "AM")
        }
    }

    const formatDate = (date) => {
        
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
    fetchCurrentWeatherData,
  };
}

function ViewController() {
  const utils = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.Utils)();
  const weatherApp = WeatherApp();
  const searchBtn = document.querySelector(".location-search-btn");
  const searchInput = document.querySelector(".location-input");

  //Show some sort of loading icon/modal while async data loads to be displayed

  const renderCurrentWeatherData = (data) => {
    const iconEl = document.querySelector(".icon");
    const degreesEl = document.querySelector(".degrees");
    const locationEl = document.querySelector(".location");
    const timeEl = document.querySelector(".time");
    const currentWeather = document.querySelector(".current-weather");
    // const dateEl = document.querySelector(".date");
    const iconCode = utils.findIconCode(data.current.condition.text);
    const formattedTime = utils.formatTime(data.location.localtime);

    degreesEl.textContent = `${Math.round(data.current.temp_f)} F`;
    locationEl.textContent = data.location.name;
    timeEl.textContent = formattedTime;
    currentWeather.textContent = data.current.condition.text;
    iconEl.src = `../dist/icons/day/${iconCode}.png`;
  };

  const renderWeatherForecast = (data) => {
    const moreWeatherInfoRight = document.querySelector(
      ".more-weather-info-right"
    );
    moreWeatherInfoRight.innerHTML = " ";
    data.forecast.forecastday.forEach((day) => {
      console.log(day);
      const forecastItemWrapper = document.createElement("div");
      let forecastDate = document.createElement("div");
      let forecastIcon = document.createElement("img");
      const forecastTempsWrapper = document.createElement("div");
      let forecastTempHigh = document.createElement("div");
      let forecastTempLow = document.createElement("div");
      let iconCode = utils.findIconCode(day.day.condition.text);

      forecastItemWrapper.classList.add("forecast-item");

      forecastDate.textContent = day.date.substring(5);
      forecastIcon.src = `../dist/icons/day/${iconCode}.png`;
      forecastTempHigh.textContent = Math.round(day.day.maxtemp_f) + "F";
      forecastTempLow.textContent = Math.round(day.day.mintemp_f) + "F";

      forecastItemWrapper.appendChild(forecastDate);
      forecastItemWrapper.appendChild(forecastIcon);
      forecastItemWrapper.appendChild(forecastTempsWrapper);

      forecastTempsWrapper.appendChild(forecastTempLow);
      forecastTempsWrapper.appendChild(forecastTempHigh);

      moreWeatherInfoRight.appendChild(forecastItemWrapper);
    });
  };

  const searchHandler = async () => {
    // const loadingEl = document.querySelector(".loading");
    const data = await weatherApp.fetchCurrentWeatherData(searchInput.value);
    renderCurrentWeatherData(data);
    renderWeatherForecast(data);
  };

  const defaultRender = async () => {
    const data = await weatherApp.fetchCurrentWeatherData("new york");
    renderCurrentWeatherData(data);
    renderWeatherForecast(data);
  };

  // const asyncFunct = async (val) => {
  //   const data = await weatherApp.fetchCurrentWeatherData(val);
  //   renderCurrentWeatherData(data);
  // }

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchHandler();
  });

  defaultRender();
}

ViewController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQVU7QUFDakM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbFNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksS0FBSyxTQUFTO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvd2VhdGhlckNvbmRpdGlvbnNEYXRhLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmRpdGlvbnMgfSBmcm9tIFwiLi93ZWF0aGVyQ29uZGl0aW9uc0RhdGEuanNcIlxyXG5cclxuZnVuY3Rpb24gVXRpbHMoKSB7XHJcblxyXG4gICAgLy9OZWVkIHRvIGRldGVybWluZSBpZiBuaWdodCBvciBub3RcclxuICAgIC8vSWYgbmlnaHQgdGhlbiB1c2UgbmlnaHQgaWNvbnNcclxuICAgIC8vSWYgZGF5IHVzZSBkYXkgaWNvbnNcclxuICAgY29uc3QgZmluZEljb25Db2RlID0gKHN0cikgPT4ge1xyXG4gICAgICAgbGV0IGNvbmRpdGlvbiA9IGNvbmRpdGlvbnMuZmluZChjb25kaSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25kaS5kYXkgPT09IHN0ciA/IGNvbmRpIDogZmFsc2U7XHJcbiAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGNvbmRpdGlvbi5pY29uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWRIb3VycyA9IHRpbWUuc3Vic3RyaW5nKDExLCAxMylcclxuXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZEhvdXJzLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRIb3VycyA9IGZvcm1hdHRlZEhvdXJzLnN1YnN0cmluZygwLDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZEhvdXJzID4gMTIpIHtcclxuICAgICAgICAgICAgLy9QTVxyXG4gICAgICAgICAgICAvLy0xMiB0byBhY2NvdW50IGZvciBtaWxpdGFyeSB0aW1lXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZEhvdXJzID0gZm9ybWF0dGVkSG91cnMgLSAxMlxyXG4gICAgICAgICAgICB0aW1lID0gdGltZS5zdWJzdHJpbmcoMCwgMTApICsgXCIgXCIgKyBmb3JtYXR0ZWRIb3VycyArIHRpbWUuc3Vic3RyaW5nKDEzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWUuY29uY2F0KFwiIFwiLCBcIlBNXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZihmb3JtYXR0ZWRIb3VycyA8IDEyKSB7XHJcbiAgICAgICAgICAgIC8vQU1cclxuICAgICAgICAgICAgcmV0dXJuIHRpbWUuY29uY2F0KFwiIFwiLCBcIkFNXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGZpbmRJY29uQ29kZSwgZm9ybWF0VGltZSB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFV0aWxzIH07IiwiY29uc3QgY29uZGl0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiU3VubnlcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkNsZWFyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDAzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhcnRseSBjbG91ZHlcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhcnRseSBjbG91ZHlcIixcclxuICAgICAgICBcImljb25cIiA6IDExNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQ2xvdWR5XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJDbG91ZHlcIixcclxuICAgICAgICBcImljb25cIiA6IDExOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiT3ZlcmNhc3RcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk92ZXJjYXN0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDMwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1pc3RcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1pc3RcIixcclxuICAgICAgICBcImljb25cIiA6IDE0M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNjMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxNzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDY2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTc5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA2OSxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA3MixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwODcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDIwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExMTQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQmxvd2luZyBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJCbG93aW5nIHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDIyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExMTcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQmxpenphcmRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkJsaXp6YXJkXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTM1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZvZ1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiRm9nXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTQ3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZyZWV6aW5nIGZvZ1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiRnJlZXppbmcgZm9nXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTUwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjYzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE1MyxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTY4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI4MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNzEsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjg0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4MCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDI5M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjk2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4NixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyOTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTg5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMwMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExOTIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE5NSxcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTk4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMxMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDEsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzE0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIwNCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbGVldFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc2xlZXRcIixcclxuICAgICAgICBcImljb25cIiA6IDMxN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjEwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxMyxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjE2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzI5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxOSxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjIyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzM1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIyNSxcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMzhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjM3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJJY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0MCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQ2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM1OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzYyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1MixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjU1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNjhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjU4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNzFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjYxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM3NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNjQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzc3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI3MyxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzg2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI3NixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM4OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM5MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyODIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzOTVcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IHsgY29uZGl0aW9ucyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBXZWF0aGVyQXBwKCkge1xyXG4gIGNvbnN0IGtleSA9IFwiNjExNjFlMjRkYjVmNDczNTllMzEyNDAxMDIzMjIxMlwiO1xyXG4gIGNvbnN0IGZldGNoQ3VycmVudFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTdgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcclxuICBjb25zdCB1dGlscyA9IFV0aWxzKCk7XHJcbiAgY29uc3Qgd2VhdGhlckFwcCA9IFdlYXRoZXJBcHAoKTtcclxuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXNlYXJjaC1idG5cIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xyXG5cclxuICAvL1Nob3cgc29tZSBzb3J0IG9mIGxvYWRpbmcgaWNvbi9tb2RhbCB3aGlsZSBhc3luYyBkYXRhIGxvYWRzIHRvIGJlIGRpc3BsYXllZFxyXG5cclxuICBjb25zdCByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xyXG4gICAgY29uc3QgZGVncmVlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XHJcbiAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyXCIpO1xyXG4gICAgLy8gY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG4gICAgY29uc3QgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSB1dGlscy5mb3JtYXRUaW1lKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcclxuXHJcbiAgICBkZWdyZWVzRWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSBGYDtcclxuICAgIGxvY2F0aW9uRWwudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgICB0aW1lRWwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xyXG4gICAgY3VycmVudFdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbiAgICBpY29uRWwuc3JjID0gYC4uL2Rpc3QvaWNvbnMvZGF5LyR7aWNvbkNvZGV9LnBuZ2A7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV2VhdGhlckZvcmVjYXN0ID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG1vcmVXZWF0aGVySW5mb1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIubW9yZS13ZWF0aGVyLWluZm8tcmlnaHRcIlxyXG4gICAgKTtcclxuICAgIG1vcmVXZWF0aGVySW5mb1JpZ2h0LmlubmVySFRNTCA9IFwiIFwiO1xyXG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF5KTtcclxuICAgICAgY29uc3QgZm9yZWNhc3RJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxldCBmb3JlY2FzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgY29uc3QgZm9yZWNhc3RUZW1wc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgZm9yZWNhc3RUZW1wSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGxldCBmb3JlY2FzdFRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsZXQgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF5LmRheS5jb25kaXRpb24udGV4dCk7XHJcblxyXG4gICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pdGVtXCIpO1xyXG5cclxuICAgICAgZm9yZWNhc3REYXRlLnRleHRDb250ZW50ID0gZGF5LmRhdGUuc3Vic3RyaW5nKDUpO1xyXG4gICAgICBmb3JlY2FzdEljb24uc3JjID0gYC4uL2Rpc3QvaWNvbnMvZGF5LyR7aWNvbkNvZGV9LnBuZ2A7XHJcbiAgICAgIGZvcmVjYXN0VGVtcEhpZ2gudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRheS5kYXkubWF4dGVtcF9mKSArIFwiRlwiO1xyXG4gICAgICBmb3JlY2FzdFRlbXBMb3cudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRheS5kYXkubWludGVtcF9mKSArIFwiRlwiO1xyXG5cclxuICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdERhdGUpO1xyXG4gICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SWNvbik7XHJcbiAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wc1dyYXBwZXIpO1xyXG5cclxuICAgICAgZm9yZWNhc3RUZW1wc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wTG93KTtcclxuICAgICAgZm9yZWNhc3RUZW1wc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wSGlnaCk7XHJcblxyXG4gICAgICBtb3JlV2VhdGhlckluZm9SaWdodC5hcHBlbmRDaGlsZChmb3JlY2FzdEl0ZW1XcmFwcGVyKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBsb2FkaW5nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwcC5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFJlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKFwibmV3IHlvcmtcIik7XHJcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgYXN5bmNGdW5jdCA9IGFzeW5jICh2YWwpID0+IHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKHZhbCk7XHJcbiAgLy8gICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgLy8gfVxyXG5cclxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZWFyY2hIYW5kbGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRlZmF1bHRSZW5kZXIoKTtcclxufVxyXG5cclxuVmlld0NvbnRyb2xsZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9