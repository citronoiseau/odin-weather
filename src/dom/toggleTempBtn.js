import tempUnits from "../tempUnits";
import getWeather from "../getWeather";

export default function toggleTempUnits() {
  const searhBarContainer = document.querySelector(".searchBarContainer");

  const toggleTempContainer = document.createElement("div");
  toggleTempContainer.classList.add("toggleTempContainer");
  searhBarContainer.appendChild(toggleTempContainer);

  const toggleTempBtn = document.createElement("button");
  toggleTempBtn.textContent = "Toggle ℃/℉";
  toggleTempBtn.addEventListener("click", () => {
    tempUnits.toggleTemp();
    getWeather();
  });
  toggleTempContainer.appendChild(toggleTempBtn);
}
