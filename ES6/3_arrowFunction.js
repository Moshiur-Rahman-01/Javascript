// normal function..
function add2(a,b){
    return a+b;
}
console.log(add2(5,6));


// ES6
let add = (a, b) => a + b;
console.log(add(2, 3)); // আউটপুট: 5



// multiple line er kaj thakle ei vabe korte hobe...
const sum2 = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sum2(1, 2, 3, 4, 5));