// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person);

console.log(myString);

// 📌 JSON.stringify() সাধারণত তখন ব্যবহার করা হয় যখন আমাদের JavaScript object-কে API এর মাধ্যমে সার্ভারে পাঠাতে হয় বা local storage-এ সংরক্ষণ করতে হয়।