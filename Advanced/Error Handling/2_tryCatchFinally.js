try {
    console.log("ami cricket khelbo");
    console.log(num);
    console.log("ami football khelbo");
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.error(error);
}
finally {
    console.log("ami khelbo");

}
console.log("")
console.log("")
console.log("")


// part-2
const name = "moshiur";
try {
    console.log("ami cricket khelbo");
    //console.log(num);
    console.log("ami football khelbo");

    if (name === "moshiur") {
        console.log("wow xoss i like")
    }
    else {
        throw "amr lekha error"
    }
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.error(error);
}
finally {
    console.log("ami khelbo");

}