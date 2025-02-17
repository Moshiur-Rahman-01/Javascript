// This is safe: 9007199254740991. This is not safe: 9007199254740992.

let r1 = Number.isSafeInteger(10);
console.log(r1);
let r2 = Number.isSafeInteger(12345678901234567890);
console.log(r2);
