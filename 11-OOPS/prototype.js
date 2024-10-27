function Product(n){
    this.name = n;
}

let x = new Product("iphone");

// adding display method to obj later
Product.prototype.display = function () { console.log("Name of Product ", this.name); }

// NOTE -> you cant do `x.prototype.display`

// this display will be accessible to x and also will present in prototype keyword.
console.log(x.display());


// dundler prototype

console.log(x.__proto__)
console.log(x.__proto__.__proto__)

