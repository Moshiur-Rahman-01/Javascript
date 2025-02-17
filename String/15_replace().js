let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// the replace() method replaces only the first match
let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace("Microsoft", "W3Schools");
console.log(newText2);

// use a regular expression with a /g flag (global match)
let text13 = "Please visit Microsoft and Microsoft!";
let newText13 = text13.replace(/Microsoft/g, "W3Schools");
console.log(newText13);


// the replace() method is case sensitive...
let text12 = "Please visit Microsoft!";
let newText12 = text12.replace("MICROSOFT", "W3Schools");
console.log(newText12); // kaj korbe naa...

// use a regular expression with an /i flag (insensitive)
let newText3 = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText3);

