function createContainer(containerClass, containerParent) {
  const container = document.createElement("div");
  container.classList.add(containerClass);
  containerParent.appendChild(container);
  return container;
}

function createElement(elementClass, elementParent) {
  const newElement = document.createElement("div");
  newElement.classList.add(elementClass);
  elementParent.appendChild(newElement);
  return newElement;
}

export default function createTodayWeather() {
  const content = document.querySelector("#content");

  const weatherCardContainer = document.createElement("div");
  weatherCardContainer.classList.add("weatherCardContainer");
  content.appendChild(weatherCardContainer);

  const weatherIconContainer = createContainer(
    "weatherIconContainer",
    weatherCardContainer,
  );

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("currentWeatherIcon");
  weatherIcon.alt = "weather icon";
  weatherIconContainer.appendChild(weatherIcon);

  const weatherDescriptionContainer = createContainer(
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
}
