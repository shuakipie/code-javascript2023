// const object1 = { name: 'John' };

// // Create a new object `object2` and copy the properties of `object1` into it
// const object2 = { ...object1 };

// // Modify the value of the `name` property in `object2`
// object2.name = 'Jane';

// console.log(object1.name); // Output: 'John'
// console.log(object2.name); // Output: 'Jane'

// const car = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 2020,
//     mileage: 1000,
//     owner: {
//       name: 'John Doe',
//       phone: '555-555-5555'
//     },
//     features: ['Automatic Transmission', 'Sunroof', 'Heated Seats'],
//     serviceHistory: [
//       { date: '01/01/2021', service: 'Oil Change' },
//       { date: '03/01/2021', service: 'Tire Rotate' },
//       { date: '05/01/2021', service: 'Brake Pad Replacement' }
//     ]
//   }
//   const originalCar = car;

// // Modify the value of the `mileage` property in the `car` object
// car.mileage = 1500;

// console.log(originalCar.mileage); // Output: 1500
// console.log(car.mileage); // Output: 1500

// // Create a new object `modifiedCar` and assign it the value of `car`
// const modifiedCar = car;

// // Modify the value of the `make` property in the `modifiedCar` object
// modifiedCar.make = 'Toyota';

// console.log(car.make); // Output: 'Toyota'
// console.log(modifiedCar.make); // Output: 'Toyota'

// // Create a new object `clonedCar` and copy the properties of `car` into it
// const clonedCar = { ...car };

// // Modify the value of the `year` property in the `clonedCar` object
// clonedCar.year = 2021;

// console.log(car.year); // Output: 2020
// console.log(clonedCar.year); // Output: 2021


const palette = {

    red: '#eb4d4b',
    yello: '#f9ca24',
    blue: '#30336b'
}

const palette2 = palette
palette2.green = '#ebf876'
palette.blue = '#30336a'

console.log(palette2.green)
console.log(palette2.blue)