import tempUnits from "../tempUnits";
import getWeather from "../getWeather";

export default function toggleTempUnits() {
  const content = document.querySelector("#content");

  const toggleTempContainer = document.createElement("div");
  toggleTempContainer.classList.add("toggleTempContainer");
  content.appendChild(toggleTempContainer);

  const toggleTempBtn = document.createElement("button");
  toggleTempBtn.textContent = "Toggle ℃/℉";
  toggleTempBtn.addEventListener("click", () => {
    tempUnits.toggleTemp();
    getWeather();
  });
  toggleTempContainer.appendChild(toggleTempBtn);
}
