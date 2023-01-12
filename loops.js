class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  class Catalog {
    constructor(books) {
      this.books = books;
    }
  
    searchByAuthor(author) {
      let results = [];
      for (let book of this.books) {
        if (book.author === author) {
          results.push(book);
        }
      }
      return results;
    }
  }

let books = [new Book("Book 1", "Author 1", 2020), new Book("Book 2", "Author 2", 2021), new Book("Book 3", "Author 1", 2022)];
let catalog = new Catalog(books);
let results = catalog.searchByAuthor("Author 1");
console.log(results);

// more examples 

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("Car started");
    }
  
    stop() {
      console.log("Car stopped");
    }
  }
  
  class ElectricCar extends Car {
    constructor(make, model, year, batteryType) {
      super(make, model, year);
      this.batteryType = batteryType;
    }
  
    start() {
      console.log("Electric car silently started");
    }
  }
  
  class GasCar extends Car {
    constructor(make, model, year, fuelType) {
      super(make, model, year);
      this.fuelType = fuelType;
    }
  
    start() {
      console.log("Gas car started with a roar");
    }
  }
  
  let tesla = new ElectricCar("Tesla", "Model S", 2020, "Lithium-ion");
  let honda = new GasCar("Honda", "Accord", 2021, "Unleaded");
  
  tesla.start();
  honda.start();
  
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
      super(make, model, year);
      this.fuelType = fuelType;
    }
  }
  
  let myCar = new Car("Honda", "Accord", 2020, "Unleaded");
  console.log(myCar.make);  // prints "Honda"
  console.log(myCar.model); // prints "Accord"
  console.log(myCar.year);  // prints 2020
  console.log(myCar.fuelType);  // prints "Unleaded"

  