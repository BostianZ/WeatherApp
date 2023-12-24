function FetchWeatherData() {
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
      fetchCurrentWeatherData,
    };
  }

  export { FetchWeatherData };