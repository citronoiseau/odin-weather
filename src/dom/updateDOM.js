import tempUnits from "../tempUnits";
import { fillForecast } from "./createForecast";

export default function updateDOM(weatherData) {
  fillForecast(weatherData.forecast);
  const isCelcius = tempUnits.getTempStatus();
  const newIcon = weatherData.current.condition.icon;
  const newCity = weatherData.location.name;
  const newCurrentTemp = isCelcius
    ? `${Math.floor(weatherData.current.temp_c)}°`
    : `${Math.floor(weatherData.current.temp_f)}°`;
  const newCurrentMaxTemp = isCelcius
    ? `${Math.floor(weatherData.forecast.forecastday[0].day.maxtemp_c)}°`
    : `${Math.floor(weatherData.forecast.forecastday[0].day.maxtemp_f)}°`;
  const newCurrentMinTemp = isCelcius
    ? `${Math.floor(weatherData.forecast.forecastday[0].day.mintemp_c)}°`
    : `${Math.floor(weatherData.forecast.forecastday[0].day.mintemp_f)}°`;
  const newCondition = weatherData.current.condition.text;
  const newFeelsLike = isCelcius
    ? `${Math.floor(weatherData.current.feelslike_c)}°`
    : `${Math.floor(weatherData.current.feelslike_f)}°`;
  const newHumidity = weatherData.current.humidity;
  const newWind = isCelcius
    ? `${Math.floor(weatherData.current.wind_kph)} km/h`
    : `${Math.floor(weatherData.current.wind_mph)} mp/h`;

  const icon = document.querySelector(".currentWeatherIcon");
  icon.src = newIcon;

  const city = document.querySelector(".city");
  city.textContent = `Now in ${newCity}`;

  const currentTemp = document.querySelector(".currentTemp");
  currentTemp.textContent = newCurrentTemp;

  const currentMinMax = document.querySelector(".currentMinMax");
  currentMinMax.textContent = `High: ${newCurrentMaxTemp} • Low: ${newCurrentMinTemp}`;

  const currentCondition = document.querySelector(".currentCondition");
  currentCondition.textContent = newCondition;

  const feelsLike = document.querySelector(".feelsLike");
  feelsLike.textContent = `Feels like: ${newFeelsLike}`;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = `Humidity: ${newHumidity}%`;

  const wind = document.querySelector(".wind");
  wind.textContent = `Wind: ${newWind}`;
}
