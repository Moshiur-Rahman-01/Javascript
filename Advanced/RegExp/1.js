//  case-insensitive 
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);



let text2 = "Visit Microsoft!";
let result = text2.replace(/microsoft/i, "W3Schools");
console.log(result);

// global search for "is" in a string
let text3 = "Is this all there is?";
let result3 = text3.match(/is/g);
console.log(result3);