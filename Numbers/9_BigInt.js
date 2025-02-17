let x = 1234567890123456789012345n;
console.log(x);

let y = BigInt(1234567890123456789012345);
console.log(x);


let a = 9007199254740995n;
let b = 9007199254740995n;
let z = a * b;
console.log(z);


let g = 5n;
let h = Number(g) / 2;
console.log(h);


let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex);
console.log(oct);
console.log(bin);