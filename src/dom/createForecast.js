import tempUnits from "../tempUnits";

function formatDay(time) {
  const date = new Date(time);
  const today = new Date();
  const day = date.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }
  return days[day];
}
function createElement(elementClass, elementParent) {
  const newElement = document.createElement("div");
  newElement.classList.add(elementClass);
  elementParent.appendChild(newElement);
  return newElement;
}

export function createForecastDOM() {
  const forecast = document.querySelector("#forecastContainer");

  const forecastContainer = createElement("forecastContainer", forecast);
  forecast.appendChild(forecastContainer);

  const forecastPhrase = createElement("forecastPhrase", forecastContainer);
  forecastPhrase.textContent = "3-day forecast";

  const threeDayForecast = createElement("threeDayForecast", forecastContainer);
}

export function fillForecast(forecastData) {
  const isCelcius = tempUnits.getTempStatus();
  const threeDayForecast = document.querySelector(".threeDayForecast");
  threeDayForecast.innerHTML = "";

  forecastData.forecastday.forEach((forecastDay) => {
    const forecastDayContainer = document.createElement("div");
    forecastDayContainer.classList.add("forecastDayContainer");
    threeDayForecast.appendChild(forecastDayContainer);

    const day = createElement("forecastDay", forecastDayContainer);
    day.textContent = formatDay(forecastDay.date);

    const iconContainer = createElement("iconContainer", forecastDayContainer);

    const icon = document.createElement("img");
    icon.src = forecastDay.day.condition.icon;
    iconContainer.appendChild(icon);

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
