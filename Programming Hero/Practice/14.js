// Use a for...of loop to concatenate all the elements of an array into a single string.
let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let str = '';
for(let i=0; i<numbers.length; i++){
    str += numbers[i];
}
console.log(str);
