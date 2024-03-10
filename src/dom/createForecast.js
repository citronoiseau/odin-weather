import tempUnits from "../tempUnits";

function formatDay(time) {
  const date = new Date(time);
  const day = date.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

export function createForecastDOM() {
  const content = document.querySelector("#content");

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecastContainer");
  content.appendChild(forecastContainer);
}

function createElement(elementClass, elementParent) {
  const newElement = document.createElement("div");
  newElement.classList.add(elementClass);
  elementParent.appendChild(newElement);
  return newElement;
}

export function fillForecast(forecastData) {
  const isCelcius = tempUnits.getTempStatus();
  const forecastContainer = document.querySelector(".forecastContainer");
  forecastContainer.innerHTML = "";

  forecastData.forecastday.forEach((forecastDay) => {
    const forecastDayContainer = document.createElement("div");
    forecastDayContainer.classList.add("forecastDayContainer");
    forecastContainer.appendChild(forecastDayContainer);

    const iconContainer = document.createElement("div");
    forecastDayContainer.appendChild(iconContainer);

    const icon = document.createElement("img");
    icon.src = forecastDay.day.condition.icon;
    iconContainer.appendChild(icon);

    const day = createElement("forecastDay", forecastDayContainer);
    day.textContent = formatDay(forecastDay.date);

    const tempContainer = createElement("tempContainer", forecastDayContainer);

    const maxTemp = document.createElement("span");
    maxTemp.textContent = isCelcius
      ? `${Math.floor(forecastDay.day.maxtemp_c)}°/`
      : `${Math.floor(forecastDay.day.maxtemp_f)}°/`;
    tempContainer.appendChild(maxTemp);

    const minTemp = document.createElement("span");
    minTemp.textContent = isCelcius
      ? `${Math.floor(forecastDay.day.mintemp_c)}°`
      : `${Math.floor(forecastDay.day.mintemp_f)}°`;
    tempContainer.appendChild(minTemp);
  });
}
