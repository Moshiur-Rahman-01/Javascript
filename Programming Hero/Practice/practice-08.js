// 1. Declare an array
let fruits = ["mango", "apple", "banana","orange","lichi"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

// 2. Add or remove elements
let tourspot = ["sajek","cox-bazar","jaflong"]
tourspot.push("kuakata");
tourspot.push("shadapathor","ratargul");
tourspot.pop();
console.log(tourspot);

// 3. Checking Array Membership with ‘includes’
let books = ["html", "css", "javascript"];
console.log(books.includes("javascript"));

// 4. Checking if it's an Array
let book = ["html", "css", "javascript"];
console.log(Array.isArray(book));

// 5. Combining Arrays
let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
console.log(c);