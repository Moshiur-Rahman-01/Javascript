let products = ["Laptop", "Phone","Laptop","Tablet","Phone"];

let uniqueProducts = [];
for(let i=0; i<products.length; i++){
    if(!uniqueProducts.includes(products[i])){
        uniqueProducts.push(products[i]);
    }
}
console.log(uniqueProducts);