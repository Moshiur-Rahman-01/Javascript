function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4)); // আউটপুট: 10


const sum2 = (...numbers) => {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sum2(1,2,3,4,5));