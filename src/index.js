import pageLoader from "./pageLoader";
import getWeather from "./getWeather";
import "./style.css";
import { getLastCity } from "./localStorage";

const baseCity = getLastCity();

pageLoader();
getWeather(baseCity);
