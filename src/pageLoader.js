import createSearchBar from "./dom/createSearchBar";
import createLocalWeatherBtn from "./dom/createLocalWeatherBtn";

export default function pageLoader() {
  createSearchBar();
  createLocalWeatherBtn();
}
