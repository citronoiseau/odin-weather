import createSearchBar from "./dom/createSearchBar";
import createLocalWeatherBtn from "./dom/createLocalWeatherBtn";
import createTodayWeather from "./dom/createTodayWeather";
import toggleTempUnits from "./dom/toggleTempBtn";

export default function pageLoader() {
  createSearchBar();
  createLocalWeatherBtn();
  createTodayWeather();
  toggleTempUnits();
}
