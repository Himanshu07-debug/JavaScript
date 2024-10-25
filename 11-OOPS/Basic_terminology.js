class Product{

    discount = 10;
    
    // constuctor
    constructor(n, p){
        this.name = n;
        this.price = p;
    }

    // member functions
    display(){

    }

}

let iphone = new Product("iphone", 300);

console.log(iphone);         // Product { name: 'iphone', price: 300 }
console.log(typeof iphone);  // object

// REMEMBER --> The created product is an object 

