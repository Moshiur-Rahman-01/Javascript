// Count the number of properties.
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let properties = Object.keys(students);
console.log(properties.length);

// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const list in myObject){
    console.log(list, typeof myObject[list]);
}