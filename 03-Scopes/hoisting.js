fun3();                 // shoot

function fun3(){
    console.log("shoot");
}

// IMP NOTE About Hoisting --->
// In EcmaScript, there is no concept like Hoisting... 
// it is just an extension of Lexical Scoping ....
// It was introduced for making developers understanding level easy


// CORNER CASE for HOISTING ------------------------>>>

console.log(x);   // undefined
var x = 10;
// NO ERROR


console.log(y);
let y = 10;
// ERROR ---> let do not get Complete Global Scope