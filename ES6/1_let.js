// test-1
let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
    console.log(x); // 2
}

// Here x is 10
console.log(x); // 10

// test-2
let y = 2;   // Allowed
{
    let y = 3;   // Allowed
    console.log(y);
}

{
    let y = 4;    // Allowed
    console.log(y);
}
console.log(y);