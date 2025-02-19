// total length same e thakbe...
// index 2 ta copy korbe 0 theke...
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.copyWithin(2, 0);
console.log(result);

// Copy to index 2, the elements from index 0 to 2:
let result2 = fruits.copyWithin(2, 0,2);
console.log(result2);



let result3 = fruits.copyWithin(3, 0, 3);
console.log(result3);