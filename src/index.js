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
