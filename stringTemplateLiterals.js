In JavaScript, template literals are a way to define strings that can span multiple lines and include embedded expressions. They are denoted by using backticks (`) instead of single or double quotes.

Here is an example of a template literal that includes an embedded expression:


let name = 'John';
let greeting = `Hello, ${name}!`;
// greeting is "Hello, John!"
Template literals can also include multi-line strings, like this:

let multiline = `This is a
multiline string`;
Template literals can be useful when you want to create strings with a lot of embedded expressions, or when you want to create multi-line strings without having to use the escape character ().

Here is an example of a template literal that includes multiple embedded expressions:

let x = 10;
let y = 20;
let equation = `${x} + ${y} = ${x + y}`;
// equation is "10 + 20 = 30"

` i counted ${3 + 4 } sheep ` // i counted 7 sheep
// template literal can add more information
` ${1 + 5} `
let username = 'ShuakiPie'
`Welcome back , ${username}`// "Welcome back, ShuakiPie"
`GAME OVER ${username.toUpperCase()} // "GAME OVER SHUAKIPIE"

let item = 'cocumbers'
let price = 1.99
let quantity = 4

`You bought ${quantity} ${item}, total price: $${price*quantity}`
// "You bougth 4 cocumbers, total price: $7.96"
const minAge = 21
let yourAge = 19

` You must be ${minAge} to enter. Come back in ${minAge - yourAge} years `
