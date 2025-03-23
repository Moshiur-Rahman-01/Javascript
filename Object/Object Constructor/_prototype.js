// Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Prototype Method যোগ করা
Car.prototype.getInfo = function () {
    return `${this.brand} ${this.model} was released in ${this.year}.`;
};

// নতুন অবজেক্ট তৈরি
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.getInfo()); // Output: Toyota Corolla was released in 2020.
console.log(car2.getInfo()); // Output: Honda Civic was released in 2019.
