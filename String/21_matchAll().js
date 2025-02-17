let text = "The rain in SPAIN stays mainly in the plain";
let result = text.matchAll("ain");
console.log(Array.from(result));


// jotogulo milbe shob dekhabe...
let result3 = text.matchAll(/ain/g);
console.log(Array.from(result3));

// jotogulo milbe shob dekhabe case senstive na...
let result4 = text.matchAll(/ain/gi);
console.log(Array.from(result4));
