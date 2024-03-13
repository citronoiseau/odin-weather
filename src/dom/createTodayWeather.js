function createElement(elementClass, elementParent) {
  const newElement = document.createElement("div");
  newElement.classList.add(elementClass);
  elementParent.appendChild(newElement);
  return newElement;
}

export default function createTodayWeather() {
  const forecast = document.querySelector("#forecastContainer");

  const weatherCardContainer = createElement("weatherCardContainer", forecast);

  const city = createElement("city", weatherCardContainer);
  city.textContent = "Now in";

  const mainInfoContainer = createElement(
    "mainInfoContainer",
    weatherCardContainer,
  );
  const tempIconContainer = createElement(
    "tempIconContainer",
    mainInfoContainer,
  );
  const wrapperTempIcon = createElement("wrapperTempIcon", tempIconContainer);
  const temp = createElement("currentTemp", wrapperTempIcon);

  const weatherIconContainer = createElement(
    "weatherIconContainer",
    wrapperTempIcon,
  );
  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("currentWeatherIcon");
  weatherIcon.alt = "weather icon";
  weatherIconContainer.appendChild(weatherIcon);

  const conditionFeelsLikeContainer = createElement(
    "conditionFeelsLikeContainer",
    mainInfoContainer,
  );
  const condition = createElement(
    "currentCondition",
    conditionFeelsLikeContainer,
  );
  const feelsLike = createElement("feelsLike", conditionFeelsLikeContainer);
  feelsLike.textContent = "Feels like:";

  const minMaxTemp = createElement("currentMinMax", tempIconContainer);

  const suppInfoContainer = createElement(
    "suppInfoContainer",
    weatherCardContainer,
  );
  const suppInfoPhrase = createElement("suppInfoPhrase", suppInfoContainer);
  suppInfoPhrase.textContent = "Current conditions:";

  const humidity = createElement("humidity", suppInfoContainer);
  humidity.textContent = "Humidity:";

  const wind = createElement("wind", suppInfoContainer);
  wind.textContent = "Wind:";
}
