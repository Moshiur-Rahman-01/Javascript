// Constructor Function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    // Method যোগ করা
    this.getDetails = function () {
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    };
}

// কনস্ট্রাক্টর ব্যবহার করে নতুন অবজেক্ট তৈরি করা
const person1 = new Person("Moshi", 22, "Kushtia");
const person2 = new Person("Rahim", 25, "Dhaka");

console.log(person1.getDetails()); // Output: Moshi is 22 years old and lives in Kushtia.
console.log(person2.getDetails()); // Output: Rahim is 25 years old and lives in Dhaka.
