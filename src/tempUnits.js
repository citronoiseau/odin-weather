import { saveTempUnits, getSavedTempUnits } from "./localStorage";

class Temperature {
  constructor(status) {
    this.isCelcius = status;
  }

  toggleTemp() {
    this.isCelcius = !this.isCelcius;
    saveTempUnits(this.isCelcius);
  }

  getTempStatus() {
    return this.isCelcius;
  }
}

const tempUnits = new Temperature(getSavedTempUnits());

export default tempUnits;
