function product(n, p){

    this.name = n;
    this.price = p;

    this.display = function(){
        console.log(this.name, this.price);
    }

    // return {name : "TV", price: 400};

    return 10;

}


let iphone = new product("iphone", 300);     // Product { name: 'iphone', price: 300 }

// Product function with new :
// No return type --> return this

// if return type exist :
// Object return type --> return the object created by you
// Non-object return type --> return this

let macBook = product("MacBook", 300);        // 10

// Product function without new :
// new is not used, so no this is assigned, no empty obj is created, return value


// REMEMBER --> classes obj cant be created without "new"


let obj = {
    x : 377,
    a : function display(){
        return this.x;               // Remember yeah access "this" se hi honga.. 
    }
    
}

obj.a();


let ob2 = {
    name : "Himanshu",
    display : function(){
        console.log(this, "is the calling site");
    }
}

ob2.display();


var ob = {
    name : "Lucky",
    company : "Infosys",
    display : () => {
        console.log(this, "is the calling site");
        console.log(this.name , " ", this.company);
        // this --> {}
        // this.name, this.company --> undefined ( lexical scope )
    }
}

console.log(ob.display());   

console.log(this);          // at global Scope, this --> empty Object