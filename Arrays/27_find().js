// অ্যারের প্রথম এলিমেন্ট রিটার্ন করে যা প্রদত্ত শর্ত পূরণ করে।
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(first);