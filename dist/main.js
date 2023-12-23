/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function WeatherApp() {
  let weatherData;
  const fetchWeatherData = async (location) => {
    const key = "61161e24db5f47359e3124010232212";
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
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
    fetchWeatherData,
  };
}

function ViewController() {
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

    degreesEl.textContent = `${Math.round(data.current.temp_f)} F`;
    locationEl.textContent = data.location.name;
    timeEl.textContent = data.location.localtime;
    // iconEl.src = data.current.condition.icon;

    //Find our own weather icons, make a function that takes the weather text
    //pass weather text throiugh function, use a switch to see if its cloudy, overcast, rainy, etc
    //return image src as value and stick it into the icon src image
  
    console.log("RENDER", data);
  };

  const searchHandler = async () => {
    const loadingEl = document.querySelector(".loading");
    const data = await weatherApp.fetchWeatherData(searchInput.value);
    renderWeatherData(data);
  };

  const defaultRender = async () => {
    const data = await weatherApp.fetchWeatherData("new york");
    renderWeatherData(data);
  }

  searchBtn.addEventListener("click", searchHandler);

  defaultRender();
}

ViewController();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxJQUFJLEtBQUssU0FBUztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gV2VhdGhlckFwcCgpIHtcclxuICBsZXQgd2VhdGhlckRhdGE7XHJcbiAgY29uc3QgZmV0Y2hXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gXCI2MTE2MWUyNGRiNWY0NzM1OWUzMTI0MDEwMjMyMjEyXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7bG9jYXRpb259YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmV0Y2hXZWF0aGVyRGF0YSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcclxuICBjb25zdCB3ZWF0aGVyQXBwID0gV2VhdGhlckFwcCgpO1xyXG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tc2VhcmNoLWJ0blwiKTtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24taW5wdXRcIik7XHJcblxyXG4gIC8vU2hvdyBzb21lIHNvcnQgb2YgbG9hZGluZyBpY29uL21vZGFsIHdoaWxlIGFzeW5jIGRhdGEgbG9hZHMgdG8gYmUgZGlzcGxheWVkXHJcblxyXG4gIGNvbnN0IHJlbmRlcldlYXRoZXJEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcclxuICAgIGNvbnN0IGRlZ3JlZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xyXG4gICAgY29uc3QgdGltZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG4gICAgY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xyXG5cclxuICAgIGRlZ3JlZXNFbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9IEZgO1xyXG4gICAgbG9jYXRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgIHRpbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xyXG4gICAgLy8gaWNvbkVsLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuXHJcbiAgICAvL0ZpbmQgb3VyIG93biB3ZWF0aGVyIGljb25zLCBtYWtlIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgd2VhdGhlciB0ZXh0XHJcbiAgICAvL3Bhc3Mgd2VhdGhlciB0ZXh0IHRocm9pdWdoIGZ1bmN0aW9uLCB1c2UgYSBzd2l0Y2ggdG8gc2VlIGlmIGl0cyBjbG91ZHksIG92ZXJjYXN0LCByYWlueSwgZXRjXHJcbiAgICAvL3JldHVybiBpbWFnZSBzcmMgYXMgdmFsdWUgYW5kIHN0aWNrIGl0IGludG8gdGhlIGljb24gc3JjIGltYWdlXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhcIlJFTkRFUlwiLCBkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGluZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcHAuZmV0Y2hXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICByZW5kZXJXZWF0aGVyRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWZhdWx0UmVuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcHAuZmV0Y2hXZWF0aGVyRGF0YShcIm5ldyB5b3JrXCIpO1xyXG4gICAgcmVuZGVyV2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaEhhbmRsZXIpO1xyXG5cclxuICBkZWZhdWx0UmVuZGVyKCk7XHJcbn1cclxuXHJcblZpZXdDb250cm9sbGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==