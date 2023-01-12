// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet('John'); // Output: "Hello, John!"
  
//   function greet(name = 'friend') {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet(); // Output: "Hello, friend!"
//   greet('John'); // Output: "Hello, John!"
  

//   function sum() {
//     let total = 0;
//     for (const argument of arguments) {
//       total += argument;
//     }
//     console.log(total);
//   }
  
//   sum(1, 2, 3); // Output: 6
//   sum(10, 20, 30, 40, 50); // Output: 150
  
//   function greet(greeting = 'Hello', name = 'friend') {
//     console.log(`${greeting}, ${name}!`);
//   }
  
//   greet(); // Output: "Hello, friend!"
//   greet('Hi', 'John'); // Output: "Hi, John!"
  
//   function greet(greeting, ...names) {
//     for (const name of names) {
//       console.log(`${greeting}, ${name}!`);
//     }
//   }
  
//   greet('Hello', 'John', 'Jane', 'Joe');
//   // Output:
//   // "Hello, John!"
//   // "Hello, Jane!"
//   // "Hello, Joe!"
  
//   function sum(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     console.log(total);
//   }
  
//   sum(1, 2, 3); // Output: 6
//   sum(10, 20, 30, 40, 50); // Output: 150
  
//   function greet(options) {
//     const { greeting, name } = options;
//     console.log(`${greeting}, ${name}!`);
//   }
  
//   greet({ greeting: 'Hello', name: 'John' }); // Output: "Hello, John!"
  

//   function greet(options = {}) {
//     const { greeting = 'Hello', name = 'friend' } = options;
//     console.log(`${greeting}, ${name}!`);
//   }
  
//   greet(); // Output: "Hello, friend!"
//   greet({ greeting: 'Hi' }); // Output: "Hi, friend!"
//   greet({ name: 'John' }); // Output: "Hello, John!"
  
//   function greet({ greeting, name }) {
//     console.log(`${greeting}, ${name}!`);
//   }
  
//   greet({ greeting: 'Hello', name: 'John' }); // Output: "Hello, John!"
  

  function greet(person) {

        console.log(`Hi, ${person}`)
  }

greet('shuakipie')



function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled: ${roll}`)
}

function throwDice(numRolls){
    for( let i = 0; i < numRolls; i++){
        rollDice()
    }
}

throwDice(10)