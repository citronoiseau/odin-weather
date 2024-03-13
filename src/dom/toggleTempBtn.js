import tempUnits from "../tempUnits";
import getWeather from "../getWeather";

export default function toggleTempUnits() {
  const searhBarContainer = document.querySelector(".searchBarContainer");

  const toggleTempContainer = document.createElement("div");
  toggleTempContainer.classList.add("toggleTempContainer");
  searhBarContainer.appendChild(toggleTempContainer);

  const toggleTempBtn = document.createElement("button");
  toggleTempBtn.id = "toggleTempBtn";

  const toggleCelcius = document.createElement("span");
  toggleCelcius.classList.add("toggleTemp");
  toggleCelcius.textContent = "°C";
  toggleTempBtn.appendChild(toggleCelcius);

  const slash = document.createElement("span");
  slash.textContent = " / ";
  toggleTempBtn.appendChild(slash);

  const toggleFahrenheit = document.createElement("span");
  toggleFahrenheit.classList.add("toggleTemp");
  toggleFahrenheit.textContent = "°F";
  toggleTempBtn.appendChild(toggleFahrenheit);

  const updateActiveClass = () => {
    const isCelcius = tempUnits.getTempStatus();
    toggleCelcius.classList.toggle("active", isCelcius);
    toggleFahrenheit.classList.toggle("active", !isCelcius);
  };
  updateActiveClass();

  toggleTempBtn.addEventListener("click", () => {
    tempUnits.toggleTemp();
    updateActiveClass();
    getWeather();
  });
  toggleTempContainer.appendChild(toggleTempBtn);
}
