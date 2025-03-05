const hena = {
    name: "hena",
    age: 10,
    friends: ["hero alom", "bappa"],
    status: "not found"
}
const henaStatus = hena.status;
const henaAge = hena.age;
const henaFriends = hena.friends;
const henaName = hena.name;
console.log(henaName);

// advance...
const {name, age, friends, status} = hena;
console.log(age);

// array + object...
const person = ["Riad", {name:"Moshiur"}, "Imad"];
const [boroVagne, ami, chotoVagne] = person;
console.log(boroVagne);
console.log(ami);
console.log(chotoVagne);