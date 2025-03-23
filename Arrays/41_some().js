const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

//যেহেতু প্রথম উপাদান 45 (যা ১৮-এর বেশি), তাই some() অপারেশন বন্ধ করে এবং অবিলম্বে true রিটার্ন করে।
console.log(someOver18);