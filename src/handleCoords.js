import getWeather from "./getWeather";

async function getCoords() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
}

export default async function sendCoords() {
  const { lat, lon } = await getCoords();
  const coords = `${lat}, ${lon}`;
  getWeather(coords);
}
