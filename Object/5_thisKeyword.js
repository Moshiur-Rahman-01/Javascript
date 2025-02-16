const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    // method
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);
console.log(person.fullName()); 