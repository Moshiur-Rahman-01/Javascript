class products {
    owner = "Moshiur Rahman";

    constructor(name, price,brand){
        console.log(name,price,brand);
    }

    details() {
        console.log("kichu ekta..");
    }
}

// notun obj create kore access nite hobe...
const obj = new products("Redmi",27400,"xiaomi");