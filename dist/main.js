/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function WeatherApp() {
  const key = "61161e24db5f47359e3124010232212";
  const fetchWeatherData = async (location) => {
    //test that parameter is a string
    //test that it also isn't numbers or a string of numbers (regex test);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
        {
          mode: "cors",
        }
      );

      const data = await response.json();
      console.log(data);
    } catch {
      console.log("error");
    }
  };

  // const fetchWithPromises = (location) => {
  //   fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
  //     {
  //       mode: "cors",
  //     }
  //   ).then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  fetchWeatherData("london");
  // fetchWithPromises("london");
}

WeatherApp();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELElBQUksS0FBSyxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJLEtBQUssU0FBUztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBXZWF0aGVyQXBwKCkge1xyXG4gIGNvbnN0IGtleSA9IFwiNjExNjFlMjRkYjVmNDczNTllMzEyNDAxMDIzMjIxMlwiO1xyXG4gIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcclxuICAgIC8vdGVzdCB0aGF0IHBhcmFtZXRlciBpcyBhIHN0cmluZ1xyXG4gICAgLy90ZXN0IHRoYXQgaXQgYWxzbyBpc24ndCBudW1iZXJzIG9yIGEgc3RyaW5nIG9mIG51bWJlcnMgKHJlZ2V4IHRlc3QpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBmZXRjaFdpdGhQcm9taXNlcyA9IChsb2NhdGlvbikgPT4ge1xyXG4gIC8vICAgZmV0Y2goXHJcbiAgLy8gICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7bG9jYXRpb259YCxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIGZldGNoV2VhdGhlckRhdGEoXCJsb25kb25cIik7XHJcbiAgLy8gZmV0Y2hXaXRoUHJvbWlzZXMoXCJsb25kb25cIik7XHJcbn1cclxuXHJcbldlYXRoZXJBcHAoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9