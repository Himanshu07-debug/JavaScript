// Arithmetic Operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);


// IMP BELOW -------------------------------------------->> 

// JS returns exact division value
console.log(5 / 2);   // 2.5

// FLOOR values
console.log(parseInt(5 / 2));     // 1 way
console.log(Math.floor(5 / 2));   // 2 way

// Infinity in JS -->
console.log(3 / 0);              // Infinity

// NOTE -> Infinity and NaN are different


// Assignment Operators

let x = 10;
x += 10;
x -= 2;
x *= 2;
x %= 2;


// Logical Operators
console.log((10 > 5) && (7 < 6));   // false
console.log((10 > 5) || (7 < 6));   // true
console.log(4 && 0);                // 0
console.log(4 || 0);                // 4
console.log(0 && 4);                // 0
console.log(3 || 5);                // 3
console.log(-4 || 5);               // -4
console.log(3 && 4);                // 4
console.log(-0 && 9);               // -0


// Comparison Operators
// > ,  >=  , < , <= 
// Abstract equality -> ==      ,  Strict equality -> ===
// Abstract not equal to -> !=      ,  Strict not equal to -> !==


// String based Operator

// + ==> concatenate two strings & return a new one

console.log("Hello" + "world");
console.log("Hello" + 5);
console.log(1 + "1");

console.log(1 + "1");    // 11
console.log(1 - "1");    // 0 --> becz - is not a String based Operator


// Bitwise Operators 

// This opertors do not directly operate on no.s, but instead operate on Binary representation of no.

console.log(5 & 3);
console.log(5 | 3);
console.log(5 << 1);
console.log(5 >> 1);


// Ternary Operator
console.log((2 > 1) ? "Himanshu" : "sharma");


// 2 to the power 3
console.log(2 ** 3);  


