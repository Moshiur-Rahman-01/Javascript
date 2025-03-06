const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "blue", price: 2200, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "white", price: 2200, brand: "xiaomi" },
    { id: 4, name: "Redmi", color: "blue", price: 27500, brand: "xiaomi" },

];


// forEach kono kichu return kore nah...
products.forEach(product => {
    //console.log(product);

    if (product.color === "blue") {
        console.log(product);
    }
})