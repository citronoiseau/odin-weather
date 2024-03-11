import pageLoader from "./pageLoader";
import getWeather from "./getWeather";
import "./style.css";

const baseCity = "Vienna";

pageLoader();
getWeather(baseCity);
