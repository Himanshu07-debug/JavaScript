let a = {"eng" : 90, "maths" : 100};
console.log(a.toString());  // [object Object]
console.log(a.valueOf());   // { eng: 90, maths: 100 }

let x = [1, 2, 3];
console.log(x.toString()); // 1, 2, 3
console.log(x.valueOf());  // [ 1, 2, 3 ]

console.log("Himanshu" + {"a" : 10});
// Following Addition Algo -
// "Himanshu" -> Already an Primitive
// {"a" : 10} -> it not Primitive, so we call ToPrimitive without a hint,
// Without a hint, so hint -> number
// We first call valueOf on {"a " : 10} -> returns same object
// We call toString -> toString will return '[object Object]' which is a String i.e Primitive.
// Ans -> Himanshu[object Object]


console.log(10 - {"a" : 10});
// Substraction algo ->
// 10 is already a Number. {"a" : 10} is not an Number, it is an Object.
// ToNumber on Object.
// Call ToPrimitive with hint number
// first we call valueOf -> it returns the same Object.
// Then we call toString -> returns '[object Object]' which is Primitive
// So call ToNumber on '[object Object]' --> NaN
// 10 - NaN ==> NaN


// OVERRIDING OBJECTS DEFAULT valueOf() and toString() -->

let w = {a : 8, toString() {return "Hello"}};
w.toString();          // 'Hello'


let y = {"b" : 90, valueOf() {return 2;}, toString() {return "hello";}}
console.log(y - 10);   
// y is an object, we need to pass it to ToPrimitive with hint Number.
// We call valueOf --> It returns 2, which is Primitive.
// 2 - 10 ==> -8

console.log(y + "hello");   // 2hello

let o4 = 10 - {valueOf() {return 8;} , valueOf() {return 150;}};   // -140
// [ last valueOf() is given priority ]

let o5 = 10 - {"x" : 1, valueOf() {return x;}};      // NaN [ x is not defined ]

let v = {"x" : 10, valueOf() {return v.x;}};   // v.x = 10 becz v is binded to { "x" : 10 };

console.log(10 - v);   // 0 ( not NaN )


console.log("Hello" + {"a" : 90, valueOf() {return {};}, toString() {return {};}});  
// Error --> Both returns Object

console.log({} + "hello");
// [object Object]hello

// NOTE -> Above code Console pe kronge, it will give NaN, becz Console me Starting {} se nhi kar sakte.
//         Use ({}) or "hello" + {} for correct answer