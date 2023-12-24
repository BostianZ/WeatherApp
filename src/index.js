import { Utils } from "./utils";

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
  const utils = Utils();
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
