class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model,
         this.year = year,
         this.color = color

    }

    getCarInfo() {
        // return a,b,c,d; 
        // console.log(`${this.brand} ${this.model} ${this.year} ${this.color}`);
        return `${this.brand} ${this.model} (${this.year}) - ${this.color}`


    }
    getCarAge() {
        // console.log(currentYear - this.year);
        return 2024 - this.year + "  years old"


    }
    
}

let car1 = new Car("Toyota", "carmy", (2015),  "black")
let car2 = new Car("honda", "Civic", (2018),  "White")
let car3 = new Car("Tesla", "Model S", (2020),  "Red")

  console.log( car1.getCarInfo());
console.log(car1.getCarAge());
  
console.log( car2.getCarInfo());
console.log(car2.getCarAge());
  
console.log( car3.getCarInfo());
console.log(car3.getCarAge());
  
