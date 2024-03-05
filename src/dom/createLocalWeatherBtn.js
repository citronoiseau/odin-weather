import handleCoords from "../handleCoords";

export default function createLocalWeatherBtn() {
  const content = document.querySelector("#content");

  const btnContainer = document.createElement("div");
  content.appendChild(btnContainer);

  const localWeatherBtn = document.createElement("button");
  localWeatherBtn.id = "localWeatherBtn";
  localWeatherBtn.textContent = "Local Weather";
  btnContainer.appendChild(localWeatherBtn);

  btnContainer.addEventListener("click", handleCoords);
}
