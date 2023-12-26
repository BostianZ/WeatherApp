import { Utils } from "./utils";
import { FetchWeatherData } from "./FetchWeatherData";

function ViewController() {
  const utils = Utils();
  const fetchWeatherData = FetchWeatherData();
  const searchBtn = document.querySelector(".location-search-btn");
  const searchInput = document.querySelector(".location-input");

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
  };

  const searchHandler = async () => {
    const data = await fetchWeatherData.fetchCurrentWeatherData(
      searchInput.value
    );
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

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchHandler();
  });

  defaultRender();
}

export { ViewController };
