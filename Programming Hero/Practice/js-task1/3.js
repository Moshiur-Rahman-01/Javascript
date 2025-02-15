// Write a function to count the number of vowels in a string.
function vowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'i' || str[i] == 'u'){
            count++;
        }
    }
    return count;
}

let result = vowels('education');
console.log(result);