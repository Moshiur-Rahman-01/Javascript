let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
console.log(result);

// same...
let result2 = text.match(/ain/);
console.log(result2);

// jotogulo milbe shob dekhabe...
let result3 = text.match(/ain/g);
console.log(result3);

// jotogulo milbe shob dekhabe case senstive na...
let result4 = text.match(/ain/gi);
console.log(result4);