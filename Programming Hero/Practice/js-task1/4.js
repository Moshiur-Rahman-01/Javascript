// Write a function to find the longest word in a given string.
// sample - input: I am learning Programming to become a programmer
// sample - output: Programming

function sentence(longest){
    let temp = longest.split(' ');
    let bigText = temp[0].length;
    let longestText;
    for(let i=0; i<temp.length; i++){
        if(bigText<temp[i].length){
            bigText = temp[i].length;
            longestText = temp[i];
        }
    }
    return longestText;
}
let result = sentence("I am learning Programming to become a programmer");
console.log(result);