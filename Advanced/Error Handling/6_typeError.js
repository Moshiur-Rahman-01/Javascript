let num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch (err) {
    //document.getElementById("demo").innerHTML = err.name;
    console.log(err.name);
}