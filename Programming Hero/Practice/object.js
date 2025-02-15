const mobile = {
    brand: "redmi",
    price: 27400,
    color: "blue",
    camera: "108mp"
};
console.log(mobile);
delete mobile.camera;
console.log(mobile);
const moshiur = Object.keys(mobile);
console.log(moshiur);
// for(const property in mobile){
//     console.log(property);
//     console.log(mobile[property]);
// }