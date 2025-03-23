let x = 5;
try {
    x = y + 1;   // y cannot be used (referenced)
}
catch (err) {
    //document.getElementById("demo").innerHTML = err.name;
    console.log(err.name);
}