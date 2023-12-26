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
        //Grabs the hours.
        let formattedHours = time.substring(11, 13)
        //Because of how the data is displayed, in military and partial military
        //Must check if a colon exists (implies single digit value)''
        if (formattedHours.includes(":")) {
            formattedHours = formattedHours.substring(0,1);
        }


        //If Number is greater than 12 it must be PM

            //If number is 24, it's 12 AM
            //Subtract 12 from 24
            //Add AM
        //Number is PM    

        //Else IF number < 12 It's AM
        //Else if the number is in between it must be 12, making it 12 PM.

        //PM
        if (formattedHours > 12 ) {
            if (formattedHours === 24) {
                formattedHours = formattedHours - 12
                time = time.substring(0, 10) + " " + formattedHours + time.substring(13);
                return time.concat(" ", "AM");
            }
            formattedHours = formattedHours - 12
            time = time.substring(0, 10) + " " + formattedHours + time.substring(13);
            return time.concat(" ", "PM");
        } else if(formattedHours < 12) {
            //AM
            return time.concat(" ", "AM")
        } else {
            //Else must be 12PM
            return time.concat(" ", "PM");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsSUFBSSxLQUFLLFNBQVM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJnQztBQUNzQjtBQUNJO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBSztBQUN2Qiw2QkFBNkIsbUVBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQkFBc0I7QUFDckUsa0RBQWtELHVCQUF1QjtBQUN6RSxpQ0FBaUMsdUJBQXVCLE9BQU8sc0JBQXNCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkd1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixtQ0FBbUMsaUVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNVNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDbEQ7QUFDQSwrREFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLEtBQUssU0FBUztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvRmV0Y2hXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL1ZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy93ZWF0aGVyQ29uZGl0aW9uc0RhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRmV0Y2hXZWF0aGVyRGF0YSgpIHtcclxuICAgIGNvbnN0IGtleSA9IFwiNjExNjFlMjRkYjVmNDczNTllMzEyNDAxMDIzMjIxMlwiO1xyXG4gICAgY29uc3QgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7bG9jYXRpb259JmRheXM9N2AsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnQgeyBGZXRjaFdlYXRoZXJEYXRhIH07IiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBGZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vRmV0Y2hXZWF0aGVyRGF0YVwiO1xyXG5pbXBvcnQgeyBkYXlzT2ZUaGVXZWVrIH0gZnJvbSBcIi4vd2VhdGhlckNvbmRpdGlvbnNEYXRhLmpzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcclxuICAgIGNvbnN0IHV0aWxzID0gVXRpbHMoKTtcclxuICAgIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBGZXRjaFdlYXRoZXJEYXRhKCk7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXNlYXJjaC1idG5cIik7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24taW5wdXRcIik7XHJcbiAgXHJcbiAgICAvL1Nob3cgc29tZSBzb3J0IG9mIGxvYWRpbmcgaWNvbi9tb2RhbCB3aGlsZSBhc3luYyBkYXRhIGxvYWRzIHRvIGJlIGRpc3BsYXllZFxyXG4gIFxyXG4gICAgY29uc3QgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhID0gKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xyXG4gICAgICBjb25zdCBkZWdyZWVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZ3JlZXNcIik7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xyXG4gICAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXdlYXRoZXJcIik7XHJcbiAgICAgIC8vIGNvbnN0IGRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcclxuICAgICAgY29uc3QgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcclxuICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IHV0aWxzLmZvcm1hdFRpbWUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xyXG4gIFxyXG4gICAgICBkZWdyZWVzRWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSBGYDtcclxuICAgICAgbG9jYXRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgICAgdGltZUVsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVGltZTtcclxuICAgICAgY3VycmVudFdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgIGljb25FbC5zcmMgPSBgLi4vZGlzdC9pY29ucy9kYXkvJHtpY29uQ29kZX0ucG5nYDtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCByZW5kZXJXZWF0aGVyRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBtb3JlV2VhdGhlckluZm9SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubW9yZS13ZWF0aGVyLWluZm8tcmlnaHRcIlxyXG4gICAgICApO1xyXG4gICAgICBtb3JlV2VhdGhlckluZm9SaWdodC5pbm5lckhUTUwgPSBcIiBcIjtcclxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF5KTtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdEl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZXQgZm9yZWNhc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZXQgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdFRlbXBzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGV0IGZvcmVjYXN0VGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBmb3JlY2FzdFRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBpY29uQ29kZSA9IHV0aWxzLmZpbmRJY29uQ29kZShkYXkuZGF5LmNvbmRpdGlvbi50ZXh0KTtcclxuICBcclxuICAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pdGVtXCIpO1xyXG4gIFxyXG4gICAgICAgIGZvcmVjYXN0RGF0ZS50ZXh0Q29udGVudCA9IGRheS5kYXRlLnN1YnN0cmluZyg1KTtcclxuICAgICAgICBmb3JlY2FzdEljb24uc3JjID0gYC4uL2Rpc3QvaWNvbnMvZGF5LyR7aWNvbkNvZGV9LnBuZ2A7XHJcbiAgICAgICAgZm9yZWNhc3RUZW1wSGlnaC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF5LmRheS5tYXh0ZW1wX2YpICsgXCJGXCI7XHJcbiAgICAgICAgZm9yZWNhc3RUZW1wTG93LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXkuZGF5Lm1pbnRlbXBfZikgKyBcIkZcIjtcclxuICBcclxuICAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF0ZSk7XHJcbiAgICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xyXG4gICAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wc1dyYXBwZXIpO1xyXG4gIFxyXG4gICAgICAgIGZvcmVjYXN0VGVtcHNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcExvdyk7XHJcbiAgICAgICAgZm9yZWNhc3RUZW1wc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wSGlnaCk7XHJcbiAgXHJcbiAgICAgICAgbW9yZVdlYXRoZXJJbmZvUmlnaHQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJdGVtV3JhcHBlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJXZWF0aGVyT3B0aWNzRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1pbmZvXCIpO1xyXG4gICAgICAgIGNvbnN0IHByZWNpcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlY2lwLWluZm9cIik7XHJcbiAgICAgICAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5LWluZm9cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWlkaXR5RGl2KTtcclxuICAgICAgICBodW1pZGl0eURpdi50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XHJcbiAgICAgICAgcHJlY2lwRGl2LnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7ZGF0YS5jdXJyZW50LnByZWNpcF9pbn0lYDtcclxuICAgICAgICB3aW5kRGl2LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfbXBofSBtcC9oICR7ZGF0YS5jdXJyZW50LndpbmRfZGlyfWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBjb25zdCBsb2FkaW5nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcclxuICAgICAgcmVuZGVyQ3VycmVudFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4gICAgICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSk7XHJcbiAgICAgIHJlbmRlcldlYXRoZXJPcHRpY3NEYXRhKGRhdGEpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGRlZmF1bHRSZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKFwibmV3IHlvcmtcIik7XHJcbiAgICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyRGF0YShkYXRhKTtcclxuICAgICAgcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGEpO1xyXG4gICAgICByZW5kZXJXZWF0aGVyT3B0aWNzRGF0YShkYXRhKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICAvLyBjb25zdCBhc3luY0Z1bmN0ID0gYXN5bmMgKHZhbCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YS5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSh2YWwpO1xyXG4gICAgLy8gICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2VhcmNoSGFuZGxlcigpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBkZWZhdWx0UmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgeyBWaWV3Q29udHJvbGxlciB9OyIsImltcG9ydCB7IGNvbmRpdGlvbnMgfSBmcm9tIFwiLi93ZWF0aGVyQ29uZGl0aW9uc0RhdGEuanNcIlxyXG5cclxuZnVuY3Rpb24gVXRpbHMoKSB7XHJcblxyXG4gICAgLy9OZWVkIHRvIGRldGVybWluZSBpZiBuaWdodCBvciBub3RcclxuICAgIC8vSWYgbmlnaHQgdGhlbiB1c2UgbmlnaHQgaWNvbnNcclxuICAgIC8vSWYgZGF5IHVzZSBkYXkgaWNvbnNcclxuICAgY29uc3QgZmluZEljb25Db2RlID0gKHN0cikgPT4ge1xyXG4gICAgICAgbGV0IGNvbmRpdGlvbiA9IGNvbmRpdGlvbnMuZmluZChjb25kaSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZGkpO1xyXG4gICAgICAgICAgICBpZiAoY29uZGkuZGF5ID09PSBzdHIgfHwgY29uZGkubmlnaHQgPT09IHN0cikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9KVxyXG4gICAgICAgY29uc29sZS5sb2coXCJmaW5kSWNvbkNvZGVcIiwgY29uZGl0aW9ucyk7XHJcbiAgICAgICByZXR1cm4gY29uZGl0aW9uLmljb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICAgICAgLy9HcmFicyB0aGUgaG91cnMuXHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZEhvdXJzID0gdGltZS5zdWJzdHJpbmcoMTEsIDEzKVxyXG4gICAgICAgIC8vQmVjYXVzZSBvZiBob3cgdGhlIGRhdGEgaXMgZGlzcGxheWVkLCBpbiBtaWxpdGFyeSBhbmQgcGFydGlhbCBtaWxpdGFyeVxyXG4gICAgICAgIC8vTXVzdCBjaGVjayBpZiBhIGNvbG9uIGV4aXN0cyAoaW1wbGllcyBzaW5nbGUgZGlnaXQgdmFsdWUpJydcclxuICAgICAgICBpZiAoZm9ybWF0dGVkSG91cnMuaW5jbHVkZXMoXCI6XCIpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZEhvdXJzID0gZm9ybWF0dGVkSG91cnMuc3Vic3RyaW5nKDAsMSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9JZiBOdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEyIGl0IG11c3QgYmUgUE1cclxuXHJcbiAgICAgICAgICAgIC8vSWYgbnVtYmVyIGlzIDI0LCBpdCdzIDEyIEFNXHJcbiAgICAgICAgICAgIC8vU3VidHJhY3QgMTIgZnJvbSAyNFxyXG4gICAgICAgICAgICAvL0FkZCBBTVxyXG4gICAgICAgIC8vTnVtYmVyIGlzIFBNICAgIFxyXG5cclxuICAgICAgICAvL0Vsc2UgSUYgbnVtYmVyIDwgMTIgSXQncyBBTVxyXG4gICAgICAgIC8vRWxzZSBpZiB0aGUgbnVtYmVyIGlzIGluIGJldHdlZW4gaXQgbXVzdCBiZSAxMiwgbWFraW5nIGl0IDEyIFBNLlxyXG5cclxuICAgICAgICAvL1BNXHJcbiAgICAgICAgaWYgKGZvcm1hdHRlZEhvdXJzID4gMTIgKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXR0ZWRIb3VycyA9PT0gMjQpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZEhvdXJzID0gZm9ybWF0dGVkSG91cnMgLSAxMlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUuc3Vic3RyaW5nKDAsIDEwKSArIFwiIFwiICsgZm9ybWF0dGVkSG91cnMgKyB0aW1lLnN1YnN0cmluZygxMyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZS5jb25jYXQoXCIgXCIsIFwiQU1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9ybWF0dGVkSG91cnMgPSBmb3JtYXR0ZWRIb3VycyAtIDEyXHJcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnN1YnN0cmluZygwLCAxMCkgKyBcIiBcIiArIGZvcm1hdHRlZEhvdXJzICsgdGltZS5zdWJzdHJpbmcoMTMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGltZS5jb25jYXQoXCIgXCIsIFwiUE1cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKGZvcm1hdHRlZEhvdXJzIDwgMTIpIHtcclxuICAgICAgICAgICAgLy9BTVxyXG4gICAgICAgICAgICByZXR1cm4gdGltZS5jb25jYXQoXCIgXCIsIFwiQU1cIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL0Vsc2UgbXVzdCBiZSAxMlBNXHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lLmNvbmNhdChcIiBcIiwgXCJQTVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGZpbmRJY29uQ29kZSwgZm9ybWF0VGltZSB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFV0aWxzIH07IiwiY29uc3QgY29uZGl0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDAsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiU3VubnlcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkNsZWFyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDAzLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhcnRseSBjbG91ZHlcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhcnRseSBjbG91ZHlcIixcclxuICAgICAgICBcImljb25cIiA6IDExNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDYsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQ2xvdWR5XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJDbG91ZHlcIixcclxuICAgICAgICBcImljb25cIiA6IDExOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwMDksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiT3ZlcmNhc3RcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk92ZXJjYXN0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxMjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDMwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1pc3RcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1pc3RcIixcclxuICAgICAgICBcImljb25cIiA6IDE0M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwNjMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAxNzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMDY2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTc5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA2OSxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMTgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTA3MixcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDE4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEwODcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIixcclxuICAgICAgICBcImljb25cIiA6IDIwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExMTQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQmxvd2luZyBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJCbG93aW5nIHNub3dcIixcclxuICAgICAgICBcImljb25cIiA6IDIyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExMTcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiQmxpenphcmRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkJsaXp6YXJkXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTM1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZvZ1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiRm9nXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTQ3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZyZWV6aW5nIGZvZ1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiRnJlZXppbmcgZm9nXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTUwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjYzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE1MyxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyNjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTY4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgICAgICBcImljb25cIiA6IDI4MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExNzEsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjg0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4MCxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDI5M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExODMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMjk2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE4NixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAyOTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTg5LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMwMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDExOTIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTE5NSxcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSByYWluXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMTk4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICBcImljb25cIiA6IDMxMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDEsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzE0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIwNCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbGVldFwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc2xlZXRcIixcclxuICAgICAgICBcImljb25cIiA6IDMxN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyMDcsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjEwLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxMyxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJMaWdodCBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjE2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzI5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIxOSxcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjIyLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzM1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTIyNSxcclxuICAgICAgICBcImRheVwiIDogXCJIZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJIZWF2eSBzbm93XCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzMzhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjM3LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkljZSBwZWxsZXRzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJJY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI0MCxcclxuICAgICAgICBcImRheVwiIDogXCJMaWdodCByYWluIHNob3dlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDMsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNTZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjQ2LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM1OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNDksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzYyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI1MixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjU1LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNjhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjU4LFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzNzFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb2RlXCIgOiAxMjYxLFxyXG4gICAgICAgIFwiZGF5XCIgOiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgICAgICBcImljb25cIiA6IDM3NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNjQsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzc3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI3MyxcclxuICAgICAgICBcImRheVwiIDogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwiaWNvblwiIDogMzg2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29kZVwiIDogMTI3NixcclxuICAgICAgICBcImRheVwiIDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM4OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyNzksXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodFwiIDogXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcImljb25cIiA6IDM5MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvZGVcIiA6IDEyODIsXHJcbiAgICAgICAgXCJkYXlcIiA6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0XCIgOiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgXCJpY29uXCIgOiAzOTVcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgZGF5c09mVGhlV2VlayA9IFtcclxuICAgIFwiU3VuZGF5XCIsXHJcbiAgICBcIk1vbmRheVwiLFxyXG4gICAgXCJUdWVzZGF5XCIsXHJcbiAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgXCJUaHVyc2RheVwiLFxyXG4gICAgXCJGcmlkYXlcIixcclxuICAgIFwiU2F0dXJkYXlcIlxyXG5dXHJcblxyXG5leHBvcnQgeyBjb25kaXRpb25zLCBkYXlzT2ZUaGVXZWVrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpZXdDb250cm9sbGVyIH0gZnJvbSBcIi4vVmlld0NvbnRyb2xsZXJcIjtcclxuXHJcblZpZXdDb250cm9sbGVyKCk7XHJcblxyXG4vLyBmdW5jdGlvbiBXZWF0aGVyQXBwKCkge1xyXG4vLyAgIGNvbnN0IGtleSA9IFwiNjExNjFlMjRkYjVmNDczNTllMzEyNDAxMDIzMjIxMlwiO1xyXG4vLyAgIGNvbnN0IGZldGNoQ3VycmVudFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4vLyAgICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTdgLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgKTtcclxuLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICAgIHJldHVybiBkYXRhO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcclxuLy8gICBjb25zdCB1dGlscyA9IFV0aWxzKCk7XHJcbi8vICAgY29uc3Qgd2VhdGhlckFwcCA9IFdlYXRoZXJBcHAoKTtcclxuLy8gICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXNlYXJjaC1idG5cIik7XHJcbi8vICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xyXG5cclxuLy8gICAvL1Nob3cgc29tZSBzb3J0IG9mIGxvYWRpbmcgaWNvbi9tb2RhbCB3aGlsZSBhc3luYyBkYXRhIGxvYWRzIHRvIGJlIGRpc3BsYXllZFxyXG5cclxuLy8gICBjb25zdCByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xyXG4vLyAgICAgY29uc3QgZGVncmVlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xyXG4vLyAgICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XHJcbi8vICAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbi8vICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyXCIpO1xyXG4vLyAgICAgLy8gY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG4vLyAgICAgY29uc3QgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcclxuLy8gICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSB1dGlscy5mb3JtYXRUaW1lKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcclxuXHJcbi8vICAgICBkZWdyZWVzRWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wX2YpfSBGYDtcclxuLy8gICAgIGxvY2F0aW9uRWwudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XHJcbi8vICAgICB0aW1lRWwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xyXG4vLyAgICAgY3VycmVudFdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbi8vICAgICBpY29uRWwuc3JjID0gYC4uL2Rpc3QvaWNvbnMvZGF5LyR7aWNvbkNvZGV9LnBuZ2A7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgcmVuZGVyV2VhdGhlckZvcmVjYXN0ID0gKGRhdGEpID0+IHtcclxuLy8gICAgIGNvbnN0IG1vcmVXZWF0aGVySW5mb1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuLy8gICAgICAgXCIubW9yZS13ZWF0aGVyLWluZm8tcmlnaHRcIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIG1vcmVXZWF0aGVySW5mb1JpZ2h0LmlubmVySFRNTCA9IFwiIFwiO1xyXG4vLyAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZGF5KTtcclxuLy8gICAgICAgY29uc3QgZm9yZWNhc3RJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICAgIGxldCBmb3JlY2FzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBsZXQgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuLy8gICAgICAgY29uc3QgZm9yZWNhc3RUZW1wc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBsZXQgZm9yZWNhc3RUZW1wSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICAgIGxldCBmb3JlY2FzdFRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBsZXQgaWNvbkNvZGUgPSB1dGlscy5maW5kSWNvbkNvZGUoZGF5LmRheS5jb25kaXRpb24udGV4dCk7XHJcblxyXG4vLyAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pdGVtXCIpO1xyXG5cclxuLy8gICAgICAgZm9yZWNhc3REYXRlLnRleHRDb250ZW50ID0gZGF5LmRhdGUuc3Vic3RyaW5nKDUpO1xyXG4vLyAgICAgICBmb3JlY2FzdEljb24uc3JjID0gYC4uL2Rpc3QvaWNvbnMvZGF5LyR7aWNvbkNvZGV9LnBuZ2A7XHJcbi8vICAgICAgIGZvcmVjYXN0VGVtcEhpZ2gudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRheS5kYXkubWF4dGVtcF9mKSArIFwiRlwiO1xyXG4vLyAgICAgICBmb3JlY2FzdFRlbXBMb3cudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRheS5kYXkubWludGVtcF9mKSArIFwiRlwiO1xyXG5cclxuLy8gICAgICAgZm9yZWNhc3RJdGVtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdERhdGUpO1xyXG4vLyAgICAgICBmb3JlY2FzdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SWNvbik7XHJcbi8vICAgICAgIGZvcmVjYXN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wc1dyYXBwZXIpO1xyXG5cclxuLy8gICAgICAgZm9yZWNhc3RUZW1wc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wTG93KTtcclxuLy8gICAgICAgZm9yZWNhc3RUZW1wc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wSGlnaCk7XHJcblxyXG4vLyAgICAgICBtb3JlV2VhdGhlckluZm9SaWdodC5hcHBlbmRDaGlsZChmb3JlY2FzdEl0ZW1XcmFwcGVyKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAvLyBjb25zdCBsb2FkaW5nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwcC5mZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbi8vICAgICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbi8vICAgICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgZGVmYXVsdFJlbmRlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKFwibmV3IHlvcmtcIik7XHJcbi8vICAgICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbi8vICAgICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgLy8gY29uc3QgYXN5bmNGdW5jdCA9IGFzeW5jICh2YWwpID0+IHtcclxuLy8gICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoQ3VycmVudFdlYXRoZXJEYXRhKHZhbCk7XHJcbi8vICAgLy8gICByZW5kZXJDdXJyZW50V2VhdGhlckRhdGEoZGF0YSk7XHJcbi8vICAgLy8gfVxyXG5cclxuLy8gICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBzZWFyY2hIYW5kbGVyKCk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIGRlZmF1bHRSZW5kZXIoKTtcclxuLy8gfVxyXG5cclxuLy8gVmlld0NvbnRyb2xsZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9