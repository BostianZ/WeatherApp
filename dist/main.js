/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/FetchWeatherData.js":
/*!*********************************!*\
  !*** ./src/FetchWeatherData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchWeatherData: () => (/* binding */ FetchWeatherData)
/* harmony export */ });
function FetchWeatherData() {
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

  

/***/ }),

/***/ "./src/ViewController.js":
/*!*******************************!*\
  !*** ./src/ViewController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewController: () => (/* binding */ ViewController)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _FetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchWeatherData */ "./src/FetchWeatherData.js");
/* harmony import */ var _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherConditionsData.js */ "./src/weatherConditionsData.js");





function ViewController() {
    const utils = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.Utils)();
    const fetchWeatherData = (0,_FetchWeatherData__WEBPACK_IMPORTED_MODULE_1__.FetchWeatherData)();
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
      data.forecast.forecastday.forEach((day, index) => {
        console.log(day);
        const forecastItemWrapper = document.createElement("div");
        let forecastDate = document.createElement("div");
        let forecastIcon = document.createElement("img");
        const forecastTempsWrapper = document.createElement("div");
        let forecastTempHigh = document.createElement("div");
        let forecastTempLow = document.createElement("div");
        let iconCode = utils.findIconCode(day.day.condition.text);
  
        forecastItemWrapper.classList.add("forecast-item");
  
        forecastDate.textContent = _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_2__.daysOfTheWeek[index];
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

    const renderWeatherOpticsData = (data) => {
        const windDiv = document.querySelector(".wind-info");
        const precipDiv = document.querySelector(".precip-info");
        const humidityDiv = document.querySelector(".humidity-info");

        console.log(humidityDiv);
        humidityDiv.textContent = `Humidity: ${data.current.humidity}%`;
        precipDiv.textContent = `Precipitation: ${data.current.precip_in}%`;
        windDiv.textContent = `${data.current.wind_mph} mp/h ${data.current.wind_dir}`;
        console.log(data);
    }
  
    const searchHandler = async () => {
      // const loadingEl = document.querySelector(".loading");
      const data = await fetchWeatherData.fetchCurrentWeatherData(searchInput.value);
      renderCurrentWeatherData(data);
      renderWeatherForecast(data);
      renderWeatherOpticsData(data);
    };
  
    const defaultRender = async () => {
      const data = await fetchWeatherData.fetchCurrentWeatherData("new york");
      renderCurrentWeatherData(data);
      renderWeatherForecast(data);
      renderWeatherOpticsData(data);
    };
  
    // const asyncFunct = async (val) => {
    //   const data = await fetchWeatherData.fetchCurrentWeatherData(val);
    //   renderCurrentWeatherData(data);
    // }
  
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      searchHandler();
    });
  
    defaultRender();
  }

  

/***/ }),

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
        console.log(condi);
            if (condi.day === str || condi.night === str) {
                return condi;
            }
       })
       console.log("findIconCode", _weatherConditionsData_js__WEBPACK_IMPORTED_MODULE_0__.conditions);
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
/* harmony export */   conditions: () => (/* binding */ conditions),
/* harmony export */   daysOfTheWeek: () => (/* binding */ daysOfTheWeek)
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

const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
/* harmony import */ var _ViewController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewController */ "./src/ViewController.js");


(0,_ViewController__WEBPACK_IMPORTED_MODULE_0__.ViewController)();

// function WeatherApp() {
//   const key = "61161e24db5f47359e3124010232212";
//   const fetchCurrentWeatherData = async (location) => {
//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`,
//         {
//           mode: "cors",
//         }
//       );
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     fetchCurrentWeatherData,
//   };
// }

// function ViewController() {
//   const utils = Utils();
//   const weatherApp = WeatherApp();
//   const searchBtn = document.querySelector(".location-search-btn");
//   const searchInput = document.querySelector(".location-input");

//   //Show some sort of loading icon/modal while async data loads to be displayed

//   const renderCurrentWeatherData = (data) => {
//     const iconEl = document.querySelector(".icon");
//     const degreesEl = document.querySelector(".degrees");
//     const locationEl = document.querySelector(".location");
//     const timeEl = document.querySelector(".time");
//     const currentWeather = document.querySelector(".current-weather");
//     // const dateEl = document.querySelector(".date");
//     const iconCode = utils.findIconCode(data.current.condition.text);
//     const formattedTime = utils.formatTime(data.location.localtime);

//     degreesEl.textContent = `${Math.round(data.current.temp_f)} F`;
//     locationEl.textContent = data.location.name;
//     timeEl.textContent = formattedTime;
//     currentWeather.textContent = data.current.condition.text;
//     iconEl.src = `../dist/icons/day/${iconCode}.png`;
//   };

//   const renderWeatherForecast = (data) => {
//     const moreWeatherInfoRight = document.querySelector(
//       ".more-weather-info-right"
//     );
//     moreWeatherInfoRight.innerHTML = " ";
//     data.forecast.forecastday.forEach((day) => {
//       console.log(day);
//       const forecastItemWrapper = document.createElement("div");
//       let forecastDate = document.createElement("div");
//       let forecastIcon = document.createElement("img");
//       const forecastTempsWrapper = document.createElement("div");
//       let forecastTempHigh = document.createElement("div");
//       let forecastTempLow = document.createElement("div");
//       let iconCode = utils.findIconCode(day.day.condition.text);

//       forecastItemWrapper.classList.add("forecast-item");

//       forecastDate.textContent = day.date.substring(5);
//       forecastIcon.src = `../dist/icons/day/${iconCode}.png`;
//       forecastTempHigh.textContent = Math.round(day.day.maxtemp_f) + "F";
//       forecastTempLow.textContent = Math.round(day.day.mintemp_f) + "F";

//       forecastItemWrapper.appendChild(forecastDate);
//       forecastItemWrapper.appendChild(forecastIcon);
//       forecastItemWrapper.appendChild(forecastTempsWrapper);

//       forecastTempsWrapper.appendChild(forecastTempLow);
//       forecastTempsWrapper.appendChild(forecastTempHigh);

//       moreWeatherInfoRight.appendChild(forecastItemWrapper);
//     });
//   };

//   const searchHandler = async () => {
//     // const loadingEl = document.querySelector(".loading");
//     const data = await weatherApp.fetchCurrentWeatherData(searchInput.value);
//     renderCurrentWeatherData(data);
//     renderWeatherForecast(data);
//   };

//   const defaultRender = async () => {
//     const data = await weatherApp.fetchCurrentWeatherData("new york");
//     renderCurrentWeatherData(data);
//     renderWeatherForecast(data);
//   };

//   // const asyncFunct = async (val) => {
//   //   const data = await weatherApp.fetchCurrentWeatherData(val);
//   //   renderCurrentWeatherData(data);
//   // }

//   searchBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     searchHandler();
//   });

//   defaultRender();
// }

// ViewController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsSUFBSSxLQUFLLFNBQVM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJnQztBQUNzQjtBQUNJO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBSztBQUN2Qiw2QkFBNkIsbUVBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0VBQWE7QUFDaEQsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQjtBQUNyRSxrREFBa0QsdUJBQXVCO0FBQ3pFLGlDQUFpQyx1QkFBdUIsT0FBTyxzQkFBc0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2R3VEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlFQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLG1DQUFtQyxpRUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1U0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNsRDtBQUNBLCtEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELElBQUksS0FBSyxTQUFTO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9GZXRjaFdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvVmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGZXRjaFdlYXRoZXJEYXRhKCkge1xyXG4gICAgY29uc3Qga2V5ID0gXCI2MTE2MWUyNGRiNWY0NzM1OWUzMTI0MDEwMjMyMjEyXCI7XHJcbiAgICBjb25zdCBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz03YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZldGNoQ3VycmVudFdlYXRoZXJEYXRhLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCB7IEZldGNoV2VhdGhlckRhdGEgfTsiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IEZldGNoV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9GZXRjaFdlYXRoZXJEYXRhXCI7XHJcbmltcG9ydCB7IGRheXNPZlRoZVdlZWsgfSBmcm9tIFwiLi93ZWF0aGVyQ29uZGl0aW9uc0RhdGEuanNcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIFZpZXdDb250cm9sbGVyKCkge1xyXG4gICAgY29uc3QgdXRpbHMgPSBVdGlscygpO1xyXG4gICAgY29uc3QgZmV0Y2hXZWF0aGVyRGF0YSA9IEZldGNoV2VhdGhlckRhdGEoKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tc2VhcmNoLWJ0blwiKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pbnB1dFwiKTtcclxuICBcclxuICAgIC8vU2hvdyBzb21lIHNvcnQgb2YgbG9hZGluZyBpY29uL21vZGFsIHdoaWxlIGFzeW5jIGRhdGEgbG9hZHMgdG8gYmUgZGlzcGxheWVkXHJcbiAgXHJcbiAgICBjb25zdCByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XHJcbiAgICAgIGNvbnN0IGRlZ3JlZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcclxuICAgICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XHJcbiAgICAgIGNvbnN0IHRpbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZVwiKTtcclxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtd2VhdGhlclwiKTtcclxuICAgICAgLy8gY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG4gICAgICBjb25zdCBpY29uQ29kZSA9IHV0aWxzLmZpbmRJY29uQ29kZShkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xyXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gdXRpbHMuZm9ybWF0VGltZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XHJcbiAgXHJcbiAgICAgIGRlZ3JlZXNFbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IEZgO1xyXG4gICAgICBsb2NhdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgICB0aW1lRWwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xyXG4gICAgICBjdXJyZW50V2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgICAgaWNvbkVsLnNyYyA9IGAuLi9kaXN0L2ljb25zL2RheS8ke2ljb25Db2RlfS5wbmdgO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHJlbmRlcldlYXRoZXJGb3JlY2FzdCA9IChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vcmVXZWF0aGVySW5mb1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5tb3JlLXdlYXRoZXItaW5mby1yaWdodFwiXHJcbiAgICAgICk7XHJcbiAgICAgIG1vcmVXZWF0aGVySW5mb1JpZ2h0LmlubmVySFRNTCA9IFwiIFwiO1xyXG4gICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXkpO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBmb3JlY2FzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZXQgZm9yZWNhc3RUZW1wSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGV0IGZvcmVjYXN0VGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGV0IGljb25Db2RlID0gdXRpbHMuZmluZEljb25Db2RlKGRheS5kYXkuY29uZGl0aW9uLnRleHQpO1xyXG4gIFxyXG4gICAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWl0ZW1cIik7XHJcbiAgXHJcbiAgICAgICAgZm9yZWNhc3REYXRlLnRleHRDb250ZW50ID0gZGF5c09mVGhlV2Vla1tpbmRleF07XHJcbiAgICAgICAgZm9yZWNhc3RJY29uLnNyYyA9IGAuLi9kaXN0L2ljb25zL2RheS8ke2ljb25Db2RlfS5wbmdgO1xyXG4gICAgICAgIGZvcmVjYXN0VGVtcEhpZ2gudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRheS5kYXkubWF4dGVtcF9mKSArIFwiRlwiO1xyXG4gICAgICAgIGZvcmVjYXN0VGVtcExvdy50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF5LmRheS5taW50ZW1wX2YpICsgXCJGXCI7XHJcbiAgXHJcbiAgICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdERhdGUpO1xyXG4gICAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJY29uKTtcclxuICAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcHNXcmFwcGVyKTtcclxuICBcclxuICAgICAgICBmb3JlY2FzdFRlbXBzV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXBMb3cpO1xyXG4gICAgICAgIGZvcmVjYXN0VGVtcHNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcEhpZ2gpO1xyXG4gIFxyXG4gICAgICAgIG1vcmVXZWF0aGVySW5mb1JpZ2h0LmFwcGVuZENoaWxkKGZvcmVjYXN0SXRlbVdyYXBwZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyV2VhdGhlck9wdGljc0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtaW5mb1wiKTtcclxuICAgICAgICBjb25zdCBwcmVjaXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWNpcC1pbmZvXCIpO1xyXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eS1pbmZvXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhodW1pZGl0eURpdik7XHJcbiAgICAgICAgaHVtaWRpdHlEaXYudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xyXG4gICAgICAgIHByZWNpcERpdi50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke2RhdGEuY3VycmVudC5wcmVjaXBfaW59JWA7XHJcbiAgICAgICAgd2luZERpdi50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC53aW5kX21waH0gbXAvaCAke2RhdGEuY3VycmVudC53aW5kX2Rpcn1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gY29uc3QgbG9hZGluZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YS5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyRGF0YShkYXRhKTtcclxuICAgICAgcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGEpO1xyXG4gICAgICByZW5kZXJXZWF0aGVyT3B0aWNzRGF0YShkYXRhKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBkZWZhdWx0UmVuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YS5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShcIm5ldyB5b3JrXCIpO1xyXG4gICAgICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICAgIHJlbmRlcldlYXRoZXJGb3JlY2FzdChkYXRhKTtcclxuICAgICAgcmVuZGVyV2VhdGhlck9wdGljc0RhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgLy8gY29uc3QgYXN5bmNGdW5jdCA9IGFzeW5jICh2YWwpID0+IHtcclxuICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEuZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEodmFsKTtcclxuICAgIC8vICAgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNlYXJjaEhhbmRsZXIoKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgZGVmYXVsdFJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHsgVmlld0NvbnRyb2xsZXIgfTsiLCJpbXBvcnQgeyBjb25kaXRpb25zIH0gZnJvbSBcIi4vd2VhdGhlckNvbmRpdGlvbnNEYXRhLmpzXCJcclxuXHJcbmZ1bmN0aW9uIFV0aWxzKCkge1xyXG5cclxuICAgIC8vTmVlZCB0byBkZXRlcm1pbmUgaWYgbmlnaHQgb3Igbm90XHJcbiAgICAvL0lmIG5pZ2h0IHRoZW4gdXNlIG5pZ2h0IGljb25zXHJcbiAgICAvL0lmIGRheSB1c2UgZGF5IGljb25zXHJcbiAgIGNvbnN0IGZpbmRJY29uQ29kZSA9IChzdHIpID0+IHtcclxuICAgICAgIGxldCBjb25kaXRpb24gPSBjb25kaXRpb25zLmZpbmQoY29uZGkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmRpKTtcclxuICAgICAgICAgICAgaWYgKGNvbmRpLmRheSA9PT0gc3RyIHx8IGNvbmRpLm5pZ2h0ID09PSBzdHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICAgICAgIGNvbnNvbGUubG9nKFwiZmluZEljb25Db2RlXCIsIGNvbmRpdGlvbnMpO1xyXG4gICAgICAgcmV0dXJuIGNvbmRpdGlvbi5pY29uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWRIb3VycyA9IHRpbWUuc3Vic3RyaW5nKDExLCAxMylcclxuXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZEhvdXJzLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRIb3VycyA9IGZvcm1hdHRlZEhvdXJzLnN1YnN0cmluZygwLDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZEhvdXJzID4gMTIpIHtcclxuICAgICAgICAgICAgLy9QTVxyXG4gICAgICAgICAgICAvLy0xMiB0byBhY2NvdW50IGZvciBtaWxpdGFyeSB0aW1lXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZEhvdXJzID0gZm9ybWF0dGVkSG91cnMgLSAxMlxyXG4gICAgICAgICAgICB0aW1lID0gdGltZS5zdWJzdHJpbmcoMCwgMTApICsgXCIgXCIgKyBmb3JtYXR0ZWRIb3VycyArIHRpbWUuc3Vic3RyaW5nKDEzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWUuY29uY2F0KFwiIFwiLCBcIlBNXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZihmb3JtYXR0ZWRIb3VycyA8IDEyKSB7XHJcbiAgICAgICAgICAgIC8vQU1cclxuICAgICAgICAgICAgcmV0dXJuIHRpbWUuY29uY2F0KFwiIFwiLCBcIkFNXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBmaW5kSWNvbkNvZGUsIGZvcm1hdFRpbWUgfVxyXG59XHJcblxyXG5leHBvcnQgeyBVdGlscyB9OyIsImNvbnN0IGNvbmRpdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDAwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlN1bm55XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJDbGVhclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTEzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAwMyxcclxuICAgICAgICBcImRheVwiIDogXCJQYXJ0bHkgY2xvdWR5XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXJ0bHkgY2xvdWR5XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDA2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkNsb3VkeVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQ2xvdWR5XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDA5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk92ZXJjYXN0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJPdmVyY2FzdFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTIyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTAzMCxcclxuICAgICAgICBcImRheVwiIDogXCJNaXN0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNaXN0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxNDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDYzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTc2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA2NixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE3OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNjksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNzIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxODVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDg3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTE0LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkJsb3dpbmcgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiQmxvd2luZyBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTE3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkJsaXp6YXJkXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJCbGl6emFyZFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTEzNSxcclxuICAgICAgICBcImRheVwiIDogXCJGb2dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZvZ1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjQ4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE0NyxcclxuICAgICAgICBcImRheVwiIDogXCJGcmVlemluZyBmb2dcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZyZWV6aW5nIGZvZ1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE1MCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI2M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNTMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE2OCxcclxuICAgICAgICBcImRheVwiIDogXCJGcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJGcmVlemluZyBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyODFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTcxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI4NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyOTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTgzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDI5NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjk5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4OSxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTkyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcclxuICAgICAgICBcImljb25cIiA6IDMwNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExOTUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE5OCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjAxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMxNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc2xlZXRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNsZWV0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMTdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjA3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxMCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzI2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxNixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMyOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMTksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIyMixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDMzNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMjUsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzM4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIzNyxcclxuICAgICAgICBcImRheVwiIDogXCJJY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzU2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0NixcclxuICAgICAgICBcImRheVwiIDogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQ5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICBcImljb25cIiA6IDM2MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNTIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzY1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1NSxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzY4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1OCxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzcxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI2MSxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNzRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjY0LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM3N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM4NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzODlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjc5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzOTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjgyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzk1XHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IGRheXNPZlRoZVdlZWsgPSBbXHJcbiAgICBcIlN1bmRheVwiLFxyXG4gICAgXCJNb25kYXlcIixcclxuICAgIFwiVHVlc2RheVwiLFxyXG4gICAgXCJXZWRuZXNkYXlcIixcclxuICAgIFwiVGh1cnNkYXlcIixcclxuICAgIFwiRnJpZGF5XCIsXHJcbiAgICBcIlNhdHVyZGF5XCJcclxuXVxyXG5cclxuZXhwb3J0IHsgY29uZGl0aW9ucywgZGF5c09mVGhlV2VlayB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gXCIuL1ZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5WaWV3Q29udHJvbGxlcigpO1xyXG5cclxuLy8gZnVuY3Rpb24gV2VhdGhlckFwcCgpIHtcclxuLy8gICBjb25zdCBrZXkgPSBcIjYxMTYxZTI0ZGI1ZjQ3MzU5ZTMxMjQwMTAyMzIyMTJcIjtcclxuLy8gICBjb25zdCBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuLy8gICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz03YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICk7XHJcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgICByZXR1cm4gZGF0YTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEsXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gVmlld0NvbnRyb2xsZXIoKSB7XHJcbi8vICAgY29uc3QgdXRpbHMgPSBVdGlscygpO1xyXG4vLyAgIGNvbnN0IHdlYXRoZXJBcHAgPSBXZWF0aGVyQXBwKCk7XHJcbi8vICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1zZWFyY2gtYnRuXCIpO1xyXG4vLyAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pbnB1dFwiKTtcclxuXHJcbi8vICAgLy9TaG93IHNvbWUgc29ydCBvZiBsb2FkaW5nIGljb24vbW9kYWwgd2hpbGUgYXN5bmMgZGF0YSBsb2FkcyB0byBiZSBkaXNwbGF5ZWRcclxuXHJcbi8vICAgY29uc3QgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhID0gKGRhdGEpID0+IHtcclxuLy8gICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcclxuLy8gICAgIGNvbnN0IGRlZ3JlZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcclxuLy8gICAgIGNvbnN0IGxvY2F0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xyXG4vLyAgICAgY29uc3QgdGltZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG4vLyAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtd2VhdGhlclwiKTtcclxuLy8gICAgIC8vIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcclxuLy8gICAgIGNvbnN0IGljb25Db2RlID0gdXRpbHMuZmluZEljb25Db2RlKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XHJcbi8vICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gdXRpbHMuZm9ybWF0VGltZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XHJcblxyXG4vLyAgICAgZGVncmVlc0VsLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcF9mKX0gRmA7XHJcbi8vICAgICBsb2NhdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4vLyAgICAgdGltZUVsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVGltZTtcclxuLy8gICAgIGN1cnJlbnRXZWF0aGVyLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4vLyAgICAgaWNvbkVsLnNyYyA9IGAuLi9kaXN0L2ljb25zL2RheS8ke2ljb25Db2RlfS5wbmdgO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IHJlbmRlcldlYXRoZXJGb3JlY2FzdCA9IChkYXRhKSA9PiB7XHJcbi8vICAgICBjb25zdCBtb3JlV2VhdGhlckluZm9SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbi8vICAgICAgIFwiLm1vcmUtd2VhdGhlci1pbmZvLXJpZ2h0XCJcclxuLy8gICAgICk7XHJcbi8vICAgICBtb3JlV2VhdGhlckluZm9SaWdodC5pbm5lckhUTUwgPSBcIiBcIjtcclxuLy8gICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGRheSk7XHJcbi8vICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBsZXQgZm9yZWNhc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgbGV0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbi8vICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgbGV0IGZvcmVjYXN0VGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBsZXQgZm9yZWNhc3RUZW1wTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgbGV0IGljb25Db2RlID0gdXRpbHMuZmluZEljb25Db2RlKGRheS5kYXkuY29uZGl0aW9uLnRleHQpO1xyXG5cclxuLy8gICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaXRlbVwiKTtcclxuXHJcbi8vICAgICAgIGZvcmVjYXN0RGF0ZS50ZXh0Q29udGVudCA9IGRheS5kYXRlLnN1YnN0cmluZyg1KTtcclxuLy8gICAgICAgZm9yZWNhc3RJY29uLnNyYyA9IGAuLi9kaXN0L2ljb25zL2RheS8ke2ljb25Db2RlfS5wbmdgO1xyXG4vLyAgICAgICBmb3JlY2FzdFRlbXBIaWdoLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXkuZGF5Lm1heHRlbXBfZikgKyBcIkZcIjtcclxuLy8gICAgICAgZm9yZWNhc3RUZW1wTG93LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXkuZGF5Lm1pbnRlbXBfZikgKyBcIkZcIjtcclxuXHJcbi8vICAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXRlKTtcclxuLy8gICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xyXG4vLyAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcHNXcmFwcGVyKTtcclxuXHJcbi8vICAgICAgIGZvcmVjYXN0VGVtcHNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcExvdyk7XHJcbi8vICAgICAgIGZvcmVjYXN0VGVtcHNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcEhpZ2gpO1xyXG5cclxuLy8gICAgICAgbW9yZVdlYXRoZXJJbmZvUmlnaHQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJdGVtV3JhcHBlcik7XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBzZWFyY2hIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgLy8gY29uc3QgbG9hZGluZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcHAuZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4vLyAgICAgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4vLyAgICAgcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGEpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGRlZmF1bHRSZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwcC5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShcIm5ldyB5b3JrXCIpO1xyXG4vLyAgICAgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4vLyAgICAgcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGEpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIGNvbnN0IGFzeW5jRnVuY3QgPSBhc3luYyAodmFsKSA9PiB7XHJcbi8vICAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwcC5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSh2YWwpO1xyXG4vLyAgIC8vICAgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4vLyAgIC8vIH1cclxuXHJcbi8vICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgc2VhcmNoSGFuZGxlcigpO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBkZWZhdWx0UmVuZGVyKCk7XHJcbi8vIH1cclxuXHJcbi8vIFZpZXdDb250cm9sbGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==