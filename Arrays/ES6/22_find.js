const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "blue", price: 23200, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "white", price: 2200, brand: "xiaomi" },
    { id: 4, name: "Redmi", color: "blue", price: 27500, brand: "xiaomi" },

];


// condition onujayee 1st e jake pabe takei return koree...
const newProducts = products.find(product => product.brand === "xiaomi");
console.log(newProducts);


// khuje na pele undefined dekhabe...