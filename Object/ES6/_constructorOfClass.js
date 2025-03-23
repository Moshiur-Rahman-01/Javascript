class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getStudentInfo() {
        return `Student Name: ${this.name}, ID: ${this.id}`;
    }
}

const student1 = new Student("Moshi", "ICT-123");
console.log(student1.getStudentInfo()); // Output: Student Name: Moshi, ID: ICT-123
