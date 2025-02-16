// Numbers:
let length = 16;
let weight = 7.5;
console.log(length+weight);

// Exponential Notation
let b = 123e5;    // 12300000
let c = 123e-5;   // 0.00123
console.log(b+c);

// BigInt
let d = BigInt("123456789012345678901234567890");
console.log(d);
// output: 123456789012345678901234567890n

//......................................................

// Strings:
let color = "Yellow"; // Using double quotes:
let lastName = ' Johnson'; // Using single quotes:
console.log(color + lastName);



//......................................................

// Booleans
let x = true;
let y = false;

//......................................................

// Object:
const person = { firstName: "John", lastName: "Doe" };
console.log(person);

//......................................................

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//......................................................

// Date object:
const date = new Date("2022-03-25");
console.log(typeof date);

// Symbol:
let id = Symbol("id");
console.log(typeof id); // আউটপুট: symbol


//......................................................

// Types are Dynamic
let a;       // Now x is undefined
a = 5;       // Now x is a Number
a = "John";  // Now x is a String
console.log(a);