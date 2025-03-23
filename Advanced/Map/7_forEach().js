// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let text = "";
fruits.forEach(function (value, key) {
    text += key + ' = ' + value + " ";
})

console.log(text);