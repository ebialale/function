// build a calculator app

class car {
  constructor (brand, model) {
    this.brand = brand,
    this.model = model
  }
  extra() {
    return 'T his is a ' + this.model
  }
}


var whip = new car('Toyota', 'Corolla');

console.log(whip.extra())