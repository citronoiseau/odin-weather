import getWeather from "./getWeather";

export default function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#searchInput");
  const input = searchInput.value.trim();
  if (input === "") {
    alert("Enter something!🙄");
    return false;
  }
  getWeather(input);
}
