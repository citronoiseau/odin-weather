import handleSearch from "../handleSearch";

export default function createSearchBar() {
  const content = document.querySelector("#content");

  const searhBarContainer = document.createElement("div");
  searhBarContainer.classList.add("searchBarContainer");
  content.appendChild(searhBarContainer);

  const searchBar = document.createElement("form");
  searchBar.id = "searchBar";
  searhBarContainer.appendChild(searchBar);

  const searchBarInput = document.createElement("input");
  searchBarInput.placeholder = "Enter your city!";
  searchBarInput.type = "text";
  searchBarInput.autocomplete = "off";
  searchBarInput.id = "searchInput";
  searchBar.appendChild(searchBarInput);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Search!";
  searchBar.appendChild(submitBtn);

  searchBar.addEventListener("submit", handleSearch);
}
