class Temperature {
  constructor(isCelcius = true) {
    this.isCelcius = isCelcius;
  }

  toggleTemp() {
    this.isCelcius = !this.isCelcius;
  }

  getTempStatus() {
    return this.isCelcius;
  }
}

const tempUnits = new Temperature();

export default tempUnits;
