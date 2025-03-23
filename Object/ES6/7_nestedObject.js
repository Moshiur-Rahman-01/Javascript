const person = {
    name: "Moshiur",
    age: 23,
    friends: ["Riad", "Abhi", "Nayeem", "Israfil"],
    1: 400,
    "ami-tumi":"klasdjf",
    details: {
        job: "NO",
        isMarrid: true,
        status: "Not found",
        father: {
            name: "Abdur Rahim Sheikh"
        }
    }
}

// Dot notation...
console.log(person.name);
console.log(person.friends);
console.log(person.friends[0]);
console.log(person.details.job);
console.log(person.details.father);
console.log(person.details.father.name);

// Optional chaining..
// qstn symbol dile error na dekhiye undefined dekhabe...
console.log(person.details.mother?.name);


// Bracket Notation...
console.log(person["name"]);
console.log(person[1]);
console.log(person["ami-tumi"]);
