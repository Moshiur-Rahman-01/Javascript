//Capitalize Every first Letter of each word in a String


let text = "hello world! javascript is fun.";
let result = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(result);