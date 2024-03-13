import createLayout from "./dom/createLayout";
import createSearchBar from "./dom/createSearchBar";
import createTodayWeather from "./dom/createTodayWeather";
import toggleTempUnits from "./dom/toggleTempBtn";
import { createForecastDOM } from "./dom/createForecast";

export default function pageLoader() {
  createLayout();
  createSearchBar();
  createTodayWeather();
  toggleTempUnits();
  createForecastDOM();
}
