// typeOf
let name = "John";
let age = 25;
let test = NaN;
let isStudent = true;
let x;
let y = null;
let id = Symbol("id");
let bigNumber = 1234567890123456789012345678901234567890n;
let bigNumber2 = BigInt(999999999999999);
let person = { name: "John", age: 25 };
let fruits = ["Apple", "Banana", "Mango"];
function greet() { console.log("Hello, World!"); }

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof test); // number
console.log(typeof isStudent); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof bigNumber2); // bigint
console.log(typeof person); // object
console.log(typeof fruits); // object
console.log(typeof greet); // function




// instanceof
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true (Array হল Object এর একটি ইনস্ট্যান্স)
console.log(arr instanceof String); // false

let s = "Hello";
console.log(s instanceof String); // false (প্রিমিটিভ স্ট্রিং)
console.log(new String("Hello") instanceof String); // true (অবজেক্ট স্ট্রিং)