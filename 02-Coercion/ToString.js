console.log("Sumesh" + "Singh");
// Both of them are Already a String.
// So Primitive Conversion will also be a String. 
// Ans we concatenate them
// SumeshSingh

console.log(undefined + "node");
// One of them is already a string, so both of them becomes a String.
// ToString on undefined --> "undefined"
// undefinednode

console.log("5" + null);
// One of them is already a string, so both of them becomes a String.
// ToString on null --> "null"
// "5" + "null" -> "5null"

console.log("Himanshu" + true);
// Himanshutrue

let a = undefined + 10;   // NaN 
// None of them is a String, so ToNumber() to both, undefined -> NaN ( Invalid Number )

let z = "070" + 10;        // "07010"

let e = null + 10;         // 10 ( none of them are String , ToNumber(null) -> 0 )


// ToString on diff types ------------------->
// null -> "null"
// undefined -> "undefined"
// true -> "true"
// false -> "false"
// 3.145 -> "3.145"
// 0 -> "0"
// -0 -> "0"
// [] -> ""
// [1, 2, 3] -> "1, 2, 3"
// [null, undefined] -> ","
// [ [], [] , [] ] --> ",,,"
// [ ,,, ] --> ",,,"