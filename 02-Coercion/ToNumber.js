// Refer ToNumber() Table .. Documentation

console.log(12 - 4);     // both of them are already a number, so we just subtract

console.log(undefined - 3);
// undefined is not a valid number, so we make it undergo ToNumber Abstract operation. 
// ToNumber(undefined) --> NaN
// NaN - 3 --> Any number with any operation on NaN, it results NaN
// NaN - 2 --> NaN


console.log(null - 5);
// null is not a valid number, so we make it undergo ToNumber Abstract operation. 
// ToNumber(null) --> +0
// 0 - 5 --> -5 

console.log("123" - 10);
// "123" is a String, so we make it undergo ToNumber Abstract operation. 
// ToNumber("123") --> 123
// 123 - 10 --> 113

console.log("12fd" - 20);
// "12fd" is a String, so we make it undergo ToNumber Abstract operation. 
// ToNumber("12fd") --> NaN because this string cannot be parsed to a number
// NaN - 20 --> NaN

// ToNumber() on different Strings ->
// "" -> 0
// "0" -> 0
// "-0" -> -0
// "009" -> 9
// "3.143" -> 3.143
// "0." -> 0
// ".0" -> 0
// "." -> NaN
// "$" -> NaN
// "ab" -> NaN
// "ab3" -> NaN

// "0xaf" -> 175 (valid hexadecimal Number, so JS parse it)
// "Oo11" -> 9  ( Octal Number )

console.log("0xf" - 1);
// "0xf", is a String, but in the starting we have 0x which denotes start of hexadecimal value.
// So if we can convert this String to valid hexadecimal , we will do it. There are some no.s starting with 0x but not hexadecimal
// ToNumber("0xf") --> 15

console.log("0xz" - 1); 
// NaN ( "0xz" is not an valid Hexadecimal number, Therefore JS cannot parsed it to a Number)

console.log(Symbol("124") - 10);    // gives TypeError

console.log(4 - true);
// true is a  boolean, so we make it undergo ToNumber Abstract operation. 
// ToNumber(true) --> 1

// Arrays ---------------------------------->
// [null]  --> 0
// [undefined] --> 0
// ["0"] --> 0
// [""]  --> 0
// [1, 2, 3] --> NaN
// [ [ [ ] ] ] --> 0
// [] -> 0

// NOTE -> This is becz Array are Object and See how ToNumber Handle Objects

console.log([] - 2);  // -2

// More Examples -->

let l = NaN - NaN;    // NaN

let m = 3 / "abc";      // NaN

let o = true - "false"; // NaN ( false is a String, not 0 )


// Array -------------------------------------------->>

let t = [1, 2, 3] - 0;  // NaN
let s = [null] - 9;     // -9
