
// IMP BELOW -------------------------------------------->> 
// Not mandatory to write return - type , if You dont put return, it automatically returns undefined.

function fun(x){

    console.log( x + 10 );

    return x*10;

}

let y = fun(10);
console.log(y);


// IMP BELOW -------------------------------------------->> 
// You can even store only function 
let x = fun;
console.log(x(10));


// NOTE -> console.log() is also an function with no returntype , it returns undefined after printing the value. [ Developer tool pe see ]

console.log(9);

console.log(console.log(9));    // print 9 and then undefined

let z = console.log;

z(9);   // Prints 9 and returns undefined
// Here z is the function -> console.log