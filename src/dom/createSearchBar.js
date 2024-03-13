import handleSearch from "../handleSearch";
import handleCoords from "../handleCoords";

export default function createSearchBar() {
  const header = document.querySelector("#header");

  const searhBarContainer = document.createElement("div");
  searhBarContainer.classList.add("searchBarContainer");
  header.appendChild(searhBarContainer);

  const searchBar = document.createElement("form");
  searchBar.id = "searchBar";
  searhBarContainer.appendChild(searchBar);

  const searchBarInput = document.createElement("input");
  searchBarInput.placeholder = "Enter your city!";
  searchBarInput.type = "text";
  searchBarInput.autocomplete = "off";
  searchBarInput.id = "searchInput";
  searchBar.appendChild(searchBarInput);

  const submitBtn = document.createElement("button");
  submitBtn.id = "submitBtn";
  submitBtn.type = "submit";
  searchBar.appendChild(submitBtn);

  const submitIcon = document.createElement("img");
  submitIcon.src = "icons/search.svg";
  submitBtn.appendChild(submitIcon);

  searchBar.addEventListener("submit", handleSearch);

  const localWeatherBtn = document.createElement("button");
  localWeatherBtn.type = "button";
  localWeatherBtn.id = "localWeatherBtn";
  searchBar.appendChild(localWeatherBtn);

  const localWeatherIcon = document.createElement("img");
  localWeatherIcon.src = "icons/homeLocation.svg";
  localWeatherBtn.appendChild(localWeatherIcon);

  localWeatherBtn.addEventListener("click", handleCoords);
}
