export function setLastCity(city) {
  localStorage.setItem("lastCity", JSON.stringify(city));
}

export function getLastCity() {
  const lastCity = localStorage.getItem("lastCity");
  return lastCity ? JSON.parse(lastCity) : "Vienna";
}

export function saveTempUnits(isCelcius) {
  localStorage.setItem("tempUnitStatus", JSON.stringify(isCelcius));
}
export function getSavedTempUnits() {
  const savedStatus = localStorage.getItem("tempUnitStatus");
  return savedStatus ? JSON.parse(savedStatus) : true;
}
