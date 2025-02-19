const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());


let numbers = [4,6,2,8,4,1];
console.log(numbers.sort());


// Numeric Sort
// ascending...
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points);

// descending...
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) { return b - a });
console.log(points2);



// sorting object
const cars = [
    { type: "Volvo", year: 2016 },
    { aype: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
cars.sort(function (a, b) { return a.year - b.year });
console.log(cars);