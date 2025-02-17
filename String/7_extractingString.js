// JavaScript String slice()
// slice(start, end)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

let part2 = text.slice(7);
console.log(part2);


let part3 = text.slice(-12);
console.log(part3);


let part4 = text.slice(-12, -6);
console.log(part4);


// JavaScript String substring()
// substring(start, end)
let part5 = text.substring(7, 13);
console.log(part5);


// JavaScript String substr()
// substr(start, length)
let part6 = text.substr(7,6);
console.log(part6);