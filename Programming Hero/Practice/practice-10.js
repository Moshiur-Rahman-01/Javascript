let str = "Andor killa bandorban";
let count = 0;

console.log(str.toUpperCase())

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'A') {
        count++;
    }
}
console.log(count);
console.log(str);
console.log()