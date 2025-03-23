const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
//যেহেতু 4 > 18 নয়, তাই false পাওয়া মাত্রই every() অপারেশন বন্ধ করে এবং false রিটার্ন করে।
console.log(allOver18);