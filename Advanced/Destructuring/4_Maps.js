// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Destructing
let text = "";
for (const [key, value] of fruits) {
    text += key + " is " + value + " ";
}

console.log(text);