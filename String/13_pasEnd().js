// This is a string method...
let text = "56";
let padded = text.padEnd(4, "0");
console.log(padded);

let padded2 = text.padEnd(4, "x");
console.log(padded2);

let numb = 5;
let text2 = numb.toString();
let padded3 = text2.padEnd(4, "0");
console.log(padded3);