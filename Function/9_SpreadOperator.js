const friends = ["Moshiur", "Riad", "Imad"];
console.log(friends);
console.log(...friends);


const newArray = ["Abhijit", ...friends];
console.log(newArray);
console.log(...newArray);

const arr = [4,3,-2,6,3,10,1];
console.log(Math.max(...arr));
console.log(Math.min(...arr));