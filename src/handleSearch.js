import getWeather from "./getWeather";
import { setLastCity } from "./localStorage";

export default function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#searchInput");
  const input = searchInput.value.trim();
  if (input === "") {
    alert("Enter something!🙄");
    return false;
  }
  setLastCity(input);
  getWeather(input);
}
