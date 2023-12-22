/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function WeatherApp() {
  const fetchWeatherData = () => {
    const key = "61161e24db5f47359e3124010232212";
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=london`, {
      mode: "cors",
    }).then((response) => {
      console.log(response.json());
    });
  };

  fetchWeatherData();
}

WeatherApp();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxJQUFJO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gV2VhdGhlckFwcCgpIHtcclxuICBjb25zdCBmZXRjaFdlYXRoZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gXCI2MTE2MWUyNGRiNWY0NzM1OWUzMTI0MDEwMjMyMjEyXCI7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT1sb25kb25gLCB7XHJcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZldGNoV2VhdGhlckRhdGEoKTtcclxufVxyXG5cclxuV2VhdGhlckFwcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=