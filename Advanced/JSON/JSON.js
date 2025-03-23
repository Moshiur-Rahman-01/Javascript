// 📌 JSON.stringify() সাধারণত তখন ব্যবহার করা হয় যখন আমাদের JavaScript object-কে API এর মাধ্যমে সার্ভারে পাঠাতে হয় বা local storage-এ সংরক্ষণ করতে হয়।

// Create an Object
const person = {
    name: "Moshiur",
    age: 23,
    friends: ["Riad", "Abhi"],
    good: true
};

console.log(typeof person)
// Stringify Object -> object theke string...
let person2 = JSON.stringify(person);

console.log(person2);
console.log(typeof person2);

// parse object -> string theke object...
const person3 = JSON.parse(person2);
console.log(person3);
console.log(typeof person3);