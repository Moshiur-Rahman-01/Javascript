const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);

// Test-2
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person);
let result = person.firstName + " is " + person.age + " years old.";
console.log(result);



//Create an Object
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50, 
    eyeColor: "blue"
}
// Create a copy
const x = person2;
// Change Age in both
x.age = 10;
console.log(person2.age);
console.log(x.age);