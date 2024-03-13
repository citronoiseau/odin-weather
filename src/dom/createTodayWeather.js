function createElement(elementClass, elementParent) {
  const newElement = document.createElement("div");
  newElement.classList.add(elementClass);
  elementParent.appendChild(newElement);
  return newElement;
}

export default function createTodayWeather() {
  const main = document.querySelector("#main");

  const weatherCardContainer = document.createElement("div");
  weatherCardContainer.classList.add("weatherCardContainer");
  main.appendChild(weatherCardContainer);

  const nowDiv = createElement("nowWeatherPhrase", weatherCardContainer);
  nowDiv.textContent = "Now";

  const weatherIconContainer = createElement(
    "weatherIconContainer",
    weatherCardContainer,
  );

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("currentWeatherIcon");
  weatherIcon.alt = "weather icon";
  weatherIconContainer.appendChild(weatherIcon);

  const weatherDescriptionContainer = createElement(
    "weatherDescriptionContainer",
    weatherCardContainer,
  );

  const city = createElement("city", weatherDescriptionContainer);
  const temp = createElement("currentTemp", weatherDescriptionContainer);
  const maxTemp = createElement("currentMaxTemp", weatherDescriptionContainer);
  maxTemp.textContent = "High:";
  const minTemp = createElement("currentMinTemp", weatherDescriptionContainer);
  minTemp.textContent = "Low:";
  const condition = createElement(
    "currentCondition",
    weatherDescriptionContainer,
  );
  const feelsLike = createElement("feelsLike", weatherDescriptionContainer);
  feelsLike.textContent = "Feels like:";

  const suppInfoContainer = createElement(
    "suppInfoContainer",
    weatherCardContainer,
  );

  const humidity = createElement("humidity", suppInfoContainer);
  humidity.textContent = "Humidity:";

  const wind = createElement("wind", suppInfoContainer);
  wind.textContent = "Wind:";
}
