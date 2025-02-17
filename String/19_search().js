let text = "Please locate where 'locate' occurs!";
let result = text.search("locate");
console.log(result);

let result2 = text.search(/locate/);
console.log(result2);