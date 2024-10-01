9.toString();    // Error [ Wrong syntax , 9 can't auto behave as Obj ]

(9).toString();  // Here 9 will first auto box to behave as Object and then toString() will be applied.

9..toString();   // One more way to make 9 to behave as Obj


let x = 9;
x.toString();    // x is auto box to behave as obj

"abc".length

// Manually
Number(9).toString();   // Number() is making 9 to behave as Obj

console.log(typeof Number("abc"));      // 'number'
console.log(typeof Number(9));          // 'number'

let y = Number(NaN);
y.toString();