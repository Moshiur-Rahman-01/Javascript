let myFunction = (a, b) => a * b;

console.log(myFunction(3,4));


// Before Arrow:
function h() {
    return "Hello World! 1";
}
const result = h();
console.log(result);

hello = function () {
    return "Hello World! 2";
}
console.log(hello());


// With Arrow Function:
hello = () => {
    return "Hello World! 3";
}
console.log(hello());


// Arrow Function for one line...
hello = () => "Hello World! 4";
console.log(hello());


//Arrow Function With Parameters:
hello = (val) => "Hello " + val;
console.log(hello("moshiur"));


//Arrow Function Without Parentheses:
hello = val => "Hello " + val;
console.log(hello("moshiur rahman"));
