// setting up this manually..
// so that the created object can be access from any other place rather than the function body where this was setup

const p1 = {
    firstName : "Himanshu",
    lastName : "Sharma",
    getDetails : function (){
        console.log("I'm ", this.firstName, " ", this.lastName);
    }
}

const p2 = function(){
    console.log(this.getDetails());

    // for p2 --> this should be an empty obj, but due to binding of this, getDetails is accessible
}

let x = p2.bind(p1);   // it returns a function
console.log(x);
x();


const obj = function(x, y){
    console.log(x + y);
    this.getDetails();
}

obj.call(p1, 45, 2);


// apply me yhi array me jaate hai parameters 





