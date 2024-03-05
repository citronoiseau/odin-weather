export default async function getWeather(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=db7ac4296d854558ab2174921240503&q=${city}`,
    { mode: "cors" },
  );
  if (response.status === 400) {
    alert("This city does not exist!");
    return;
  }
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(
    `City: ${weatherData.location.name}, Temperature: ${weatherData.current.temp_c}℃, Condition: ${weatherData.current.condition.text}, Feels Like: ${weatherData.current.feelslike_c}℃`,
  );
}
