// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1);


// Skipping Array Values
let [f1, , , f2] = fruits;
console.log(f2);



// The Rest Property
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = numbers
console.log(rest);