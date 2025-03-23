const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
for(let fruit in fruits){
    console.log(fruit);
}

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
    text += person[x] + " ";
};
console.log(text);