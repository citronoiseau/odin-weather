export default function createLayout() {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";
  content.appendChild(header);

  const body = document.createElement("div");
  body.id = "main";
  content.appendChild(body);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logoContainer");
  body.appendChild(logoContainer);

  const logoName = document.createElement("div");
  logoName.id = "logoName";
  logoName.textContent = "SoftWeather";
  logoContainer.appendChild(logoName);

  const forecast = document.createElement("div");
  forecast.id = "forecastContainer";
  body.appendChild(forecast);

  const footer = document.createElement("div");
  footer.id = "footer";
  content.appendChild(footer);

  const message = document.createElement("div");
  message.textContent = "by ";
  const authorLink = document.createElement("a");
  authorLink.textContent = "lemonbirdy";
  authorLink.href = "https://github.com/citronoiseau/weather-odin";
  authorLink.target = "_blank";

  footer.appendChild(message);
  message.appendChild(authorLink);
}
