const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// change the value of object...
person.eyeColor = "black";
delete person.age;
console.log(person);