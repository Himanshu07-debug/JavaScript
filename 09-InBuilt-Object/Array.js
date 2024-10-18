let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);


// for each loop
for(let x of arr){
    console.log(x);
}


// Insertion ----------------------------->>

// at first
arr.unshift(0);
console.log(arr);

// at end
arr.push(7);
console.log(arr);


// at middle
arr.splice(3, 0, 100);
console.log(arr);

// 1st parameter is index ( 0 based indexing ), 2nd is no. of elements to delete, 3rd is inserting element value


// Searching ---------------------------->>

console.log(arr.indexOf(5)); // 5 ( 1 based indexing )
console.log(arr.indexOf(50)); // -1

console.log(arr.includes(5)); // true
console.log(arr.includes(50)); // false


// If array of Objects THEN ----------------------------------------->>>

let objArr = [
    {
        No : 1,
        Name : 'Himanshu'
    }
    ,
    {
        No : 2,
        Name : 'Prish'
    }
]

console.log(objArr.includes({No:1, Name:"Himanshu"}));       // false (but it is present)

// includes , indexOf do not work in array of objects.. here find function with callback function is used

let obj = objArr.find(function(obj){
    return obj.Name === "Himanshu";
})


// Optimized way of writing above thing

let ob = objArr.find((obj) => obj.Name === "Himanshu");



// Deletion ------------------------------>>

// at beginning
arr.shift();
console.log(arr);

// at End
arr.pop();
console.log(arr);

// Remove at Middle 
arr.splice(1, 1);
console.log(arr);



// Emptying Array ------------------------------>>>

// 1st way
let ar = [1,2,5,4,7];
console.log(ar);

let arr1 = ar;   // Addresses are passed

ar = []
console.log(ar); // Empty
console.log(arr1);  // Not empty

// Becz you had just point the ar to an new empty array, but arr1 is still pointing to [1,2,5,4,7] array object


// 2nd way : BEST
let arr2 = arr1;
arr1.length = 0;
console.log(arr1);
console.log(arr2);


// COMBINING TWO ARRAY ------------------------------->>>

let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

console.log(first, second);

let combine = first.concat(second);
console.log(combine);