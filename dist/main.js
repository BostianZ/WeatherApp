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
  // const isLoading = (bool) => {
  //   const loadingEl = document.querySelector(".loading");

  // }

  const renderWeatherData = (data) => {
    const iconEl = document.querySelector(".icon");
    const degreesEl = document.querySelector(".degrees");
    const locationEl = document.querySelector(".location");
    const timeEl = document.querySelector(".time");
    const dateEl = document.querySelector(".date");

    degreesEl.textContent = data.current.condition.temp_f;
    locationEl.textContent = data.location.name;
    timeEl.textContent = data.location.localtime;
    
    
    console.log("RENDER", data);
  };

  const searchHandler = async () => {
    const data = await weatherApp.fetchWeatherData(searchInput.value);
    //If data is loaing show loading modal
    //Once we have data hhide loading modal
    renderWeatherData(data);
  };

  searchBtn.addEventListener("click", searchHandler);

  weatherApp.fetchWeatherData("new york");
}

ViewController();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxJQUFJLEtBQUssU0FBUztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFdlYXRoZXJBcHAoKSB7XHJcbiAgbGV0IHdlYXRoZXJEYXRhO1xyXG4gIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IGtleSA9IFwiNjExNjFlMjRkYjVmNDczNTllMzEyNDAxMDIzMjIxMlwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoV2VhdGhlckRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gVmlld0NvbnRyb2xsZXIoKSB7XHJcbiAgY29uc3Qgd2VhdGhlckFwcCA9IFdlYXRoZXJBcHAoKTtcclxuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXNlYXJjaC1idG5cIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xyXG5cclxuICAvL1Nob3cgc29tZSBzb3J0IG9mIGxvYWRpbmcgaWNvbi9tb2RhbCB3aGlsZSBhc3luYyBkYXRhIGxvYWRzIHRvIGJlIGRpc3BsYXllZFxyXG4gIC8vIGNvbnN0IGlzTG9hZGluZyA9IChib29sKSA9PiB7XHJcbiAgLy8gICBjb25zdCBsb2FkaW5nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyV2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xyXG4gICAgY29uc3QgZGVncmVlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XHJcbiAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XHJcblxyXG4gICAgZGVncmVlc0VsLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZW1wX2Y7XHJcbiAgICBsb2NhdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgdGltZUVsLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJSRU5ERVJcIiwgZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBwLmZldGNoV2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4gICAgLy9JZiBkYXRhIGlzIGxvYWluZyBzaG93IGxvYWRpbmcgbW9kYWxcclxuICAgIC8vT25jZSB3ZSBoYXZlIGRhdGEgaGhpZGUgbG9hZGluZyBtb2RhbFxyXG4gICAgcmVuZGVyV2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hIYW5kbGVyKTtcclxuXHJcbiAgd2VhdGhlckFwcC5mZXRjaFdlYXRoZXJEYXRhKFwibmV3IHlvcmtcIik7XHJcbn1cclxuXHJcblZpZXdDb250cm9sbGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==