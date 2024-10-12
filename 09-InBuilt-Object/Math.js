// Euler number
console.log(Math.E);

// PI
console.log(Math.PI);

// Round
console.log(Math.round(12.79));  // 13
console.log(Math.round(12.48));  // 12

// Ceil
console.log(Math.ceil(12.38));

// floor
console.log(Math.floor(12.45));

// Random
console.log(Math.random());

// Min
console.log(Math.min(4, 5));

// Max
console.log(Math.max(6, 7));

// pow
console.log(Math.pow(3, 2));


// ********************* Question **********************************

// Returning a random integer between two bounds --> LowerBound - 40 AND Upper Bound - 100

// Approach 1
console.log(Math.round(Math.random() * (100 - 40)) + 40);


// Approach 2
var n = Math.random();
// Math.random() give any value ranging from 0 to 0.999999999999 (NEVER 1)

// Suppose we have a DICE , Then how to bring this random number in range of 1-6

// let n = 0.36473827
n = n * 6;                  // n = 2.1884296

n = Math.floor(n) + 1;      // n = 3   (+1 isliye becz math.floor ki value 0 se 5 ke beech range krngi)
console.log(n);

