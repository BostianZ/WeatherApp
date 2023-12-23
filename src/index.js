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
