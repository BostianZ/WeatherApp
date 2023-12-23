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
