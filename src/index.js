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
