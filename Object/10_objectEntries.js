const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "      ";
}
console.log(text);
// এই কোডটি fruits অবজেক্টের কী-ভ্যালু পেয়ার গুলিকে একটি স্ট্রিং ফরম্যাটে রূপান্তর করে এবং প্রিন্ট করে।


console.log(fruits);