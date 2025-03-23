const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "blue", price: 23200, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "white", price: 2200, brand: "xiaomi" },
    { id: 4, name: "Redmi", color: "blue", price: 27500, brand: "xiaomi" },

];


// condition onujayee notun kore array return koree...
const newProducts = products.filter(product => product.price > 3000);
console.log(newProducts);

// khuje na pele empty array dekhabe...