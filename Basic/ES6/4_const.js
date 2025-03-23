// test-1
const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;  // This will also give an error
console.log(PI);


// test-2
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; // You can change an element:
cars.push("Audi"); // You can add an element:
console.log(cars);


// test-3
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red"; // You can change a property:
car.owner = "Johnson"; // You can add a property:
console.log(car);


// block scope & global scope ....

// test-4
const x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
    console.log(x);
}
// Here x is 10
console.log(x);