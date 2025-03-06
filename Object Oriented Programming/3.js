class products {
    owner = "Moshiur Rahman";

    constructor(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    details() {
        console.log(`ami ${this.name} product er details`);
    }
}

// notun obj create kore access nite hobe...
const obj = new products("Redmi", 27400, "xiaomi");
obj.details();
console.log(obj)

