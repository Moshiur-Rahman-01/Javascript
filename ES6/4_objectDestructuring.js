const hena = {
    name: "hena",
    age: 10,
    friends: ["hero alom", "bappa"],
    status: "not found"
}

// old 
const henaStatus = hena.status;
const henaAge = hena.age;
const henaFriends = hena.friends;
const henaName = hena.name;
console.log(henaName);

// ES6
// object er key name same rakte hobee & age pore hole problem nai...
const { name, age, friends, status } = hena;
console.log(age);

// array + object...
const person = ["Riad", { name: "Moshiur" }, "Imad"];
const [boroVagne, ami, chotoVagne] = person;
console.log(boroVagne);
console.log(ami);
console.log(chotoVagne);