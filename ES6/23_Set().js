// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");


// array return korbee...
console.log(letters);
console.log(letters.size);


// test-2
// The has() method returns true if a specified value exists in a set.
const letters2 = new Set(["a", "b", "c"]);

// Does the Set contain "d"?
answer = letters2.has("d");
console.log(answer);