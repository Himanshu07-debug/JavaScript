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