try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch (err) {
    //document.getElementById("demo").innerHTML = err.name;
    console.log(err.name);
}