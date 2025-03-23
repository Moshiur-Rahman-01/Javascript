try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch (err) {
    //document.getElementById("demo").innerHTML = err.name;
    console.log(err.name);
}