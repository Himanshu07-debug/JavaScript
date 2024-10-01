console.log(NaN === 234);   // false
console.log(NaN === NaN);   // false
console.log(33 === 33);     // true
console.log(23 === 33);     // false
console.log(0 === -0);      // true
console.log(-0 === 0);      // true
console.log(undefined === undefined);
console.log(null === null);
console.log("Hi" === "Hi");

console.log({"a" : 2} === {"a" : 2});    // Always FALSE becz JS compares Objects by reference, not values and here there is 2 diff loc. obj.
console.log({} === {});                 // False

let x = {"a" : 2};
console.log(x === x);       // true

// Same for Symbol -> JS compares Symbol by Reference
let y = Symbol('Hi');
console.log(y === y);       // true

