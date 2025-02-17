// cese censitive 
let text = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text);
text1 = text.replaceAll("Cats", "Dogs");
console.log(text1);
text2 = text.replaceAll("cats", "dogs");
console.log(text2);


//
text3 = text.replaceAll(/Cats/g, "Dogs");
console.log(text3);

text4 = text.replaceAll(/cats/g, "dogs");
console.log(text4);
