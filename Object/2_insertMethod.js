let person = {
    name: "John",
    age: 30
};

// নতুন মেথড যোগ
person.greet = function () {
    return "Hello, " + this.name;
};

console.log(person.greet()); // আউটপুট: Hello, John