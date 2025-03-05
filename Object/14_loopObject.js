const person = {
    name: "Moshiur",
    age: 23,
    country: "BD"
}

console.log(person["name"]);

for(let key in person){
    console.log(`key: ${key}  value: ${person[key]}`)
}