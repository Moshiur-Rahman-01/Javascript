// অ্যারের last এলিমেন্টের ইনডেক্স রিটার্ন করে যা প্রদত্ত শর্ত পূরণ করে।
const temp = [27, 28, 30, 40, 42, 35, 30,45];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);