// test-1
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
console.log(carName1);
console.log(carName2);


// test-2
let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes:
console.log(answer2);
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes:
console.log(answer3);

// test-3
let x = "John";
let y = new String("John");
console.log(x==y , typeof x);
console.log(x===y, typeof y);

// test-4
let a = new String("John");
let b = new String("John");
console.log(a === b); //Comparing two JavaScript objects always returns false.