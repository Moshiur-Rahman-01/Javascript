let w = 70;
let h = 1.64;
let BMI = w / (h*h);

console.log("My BMI is : " + BMI.toFixed(2));

if(BMI < 18.5){
    console.log("You are underweight.")
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log("You are normal.");
}
else if(BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight.");
}
else{
    console.log("You are obese.");
}