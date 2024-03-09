import handleCoords from "../handleCoords";

export default function createLocalWeatherBtn() {
  const searhBarContainer = document.querySelector(".searchBarContainer");

  const btnContainer = document.createElement("div");
  searhBarContainer.appendChild(btnContainer);

  const localWeatherBtn = document.createElement("button");
  localWeatherBtn.id = "localWeatherBtn";
  localWeatherBtn.textContent = "Local Weather";
  btnContainer.appendChild(localWeatherBtn);

  btnContainer.addEventListener("click", handleCoords);
}
