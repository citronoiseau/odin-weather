import tempUnits from "../tempUnits";

export default function updateDOM(weatherData) {
  const isCelcius = tempUnits.getTempStatus();
  const newIcon = weatherData.current.condition.icon;
  const newCity = weatherData.location.name;
  const newCurrentTemp = isCelcius
    ? `${Math.round(weatherData.current.temp_c)}℃`
    : `${Math.round(weatherData.current.temp_f)}℉`;
  const newCurrentMaxTemp = isCelcius
    ? `${Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c)}℃`
    : `${Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)}℉`;
  const newCurrentMinTemp = isCelcius
    ? `${weatherData.forecast.forecastday[0].day.mintemp_c}℃`
    : `${weatherData.forecast.forecastday[0].day.mintemp_f}℉`;
  const newCondition = weatherData.current.condition.text;
  const newFeelsLike = isCelcius
    ? `${weatherData.current.feelslike_c}℃`
    : `${weatherData.current.feelslike_f}℉`;

  const icon = document.querySelector(".currentWeatherIcon");
  icon.src = newIcon;

  const city = document.querySelector(".city");
  city.textContent = newCity;

  const currentTemp = document.querySelector(".currentTemp");
  currentTemp.textContent = newCurrentTemp;

  const currentMaxTemp = document.querySelector(".currentMaxTemp");
  currentMaxTemp.textContent = `High: ${newCurrentMaxTemp}`;

  const currentMinTemp = document.querySelector(".currentMinTemp");
  currentMinTemp.textContent = `Low: ${newCurrentMinTemp}`;

  const currentCondition = document.querySelector(".currentCondition");
  currentCondition.textContent = newCondition;

  const feelsLike = document.querySelector(".feelsLike");
  feelsLike.textContent = newFeelsLike;
}
