// You are given an array of numbers.Count how many times the a number is repeated in the array.
// sample - input: numbers = [5, 6, 11, 12, 98, 5]
// find: 5
// output: 2
let numbers = [5, 6, 11, 12, 98, 5];
let find = 5;
let count = 0;
for(let i=0; i<numbers.length; i++){
    if(find == numbers[i]){
        count++;
    }
}
console.log(count);