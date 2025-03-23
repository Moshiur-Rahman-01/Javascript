// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
//let { firstName, lastName } = person;

// Destructuring
//let { lastName, firstName } = person;

// Destructuring
//let { firstName, lastName, country = "US" } = person;

// object er key name change kora holo..
let { lastName: name } = person;
console.log(name);
