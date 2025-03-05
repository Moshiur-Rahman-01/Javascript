const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

for (let [fruit, value] of Object.entries(fruits)) {
    console.log(`fruit: ${fruit} value: ${value}`)
}
// এই কোডটি fruits অবজেক্টের কী-ভ্যালু পেয়ার গুলিকে একটি স্ট্রিং ফরম্যাটে রূপান্তর করে এবং প্রিন্ট করে।


// notun properties add hobe na r...
Object.seal(fruits);

// notun object or value kono kichui add kora ba change kora jabe naa...
Object.freeze(fruits);

fruits.Mango = 300;


console.log(fruits);
// 
console.log(Object.entries(fruits));
