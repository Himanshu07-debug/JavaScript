// Suppose I have a Function of Binary Search, If the element not found, it will return NaN. Now if I am calling it, then agar NaN mila to 
// uska pta kaise chalega.. Becz NaN khud se comapare hoke bhi False deta hai...
// eg -> if(x == NaN) ? return "Not Found" : return x;   --> Always this will be False


// For this We have isNaN function, but there are some issues with isNaN function ...

// Lets see -->

let a = "10";
let b = "abc";
let c = "abcs";
let d = 10 - c;

console.log(isNaN(a));  // false
console.log(isNaN(b));  // True
console.log(isNaN(c));  // True
console.log(isNaN(d));  // True

// Here sirf d NaN hai, but b and c bhi NaN consider hue, WHY ??

// isNaN function coerces the argument to ToNumber before Checking for NaN . 
// This converts string like "abc" to a Number thus making the number as NaN & hence isNaN returns true

// Resolving the issue --> 
console.log((typeof(d) == 'number' && isNaN(d)) ? "NaN value" : "Not a NaN value");



// But instead of going into this overhead, JS provides one more Function to check for NaN ??
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"));

// Number.isNaN doesn't do coercion



