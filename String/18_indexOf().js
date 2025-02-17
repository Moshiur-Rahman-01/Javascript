let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);


// khuje na pele -1 return korbe...
let index2 = text.indexOf("Moshiur");
console.log(index2);

// lastIndexOf()
let index3 = text.lastIndexOf("locate");
console.log(index3);

// both method accepted...
let index4 = text.indexOf("locate", 15); // index 15 er por theke check korbe...
console.log(index4);

// ulta dik theke khoja shuru korbee or index 15 er moddhe khujbe...
let index5 = text.lastIndexOf("locate", 15);
console.log(index5);