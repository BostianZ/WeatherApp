import { ViewController } from "./ViewController";

ViewController();

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
