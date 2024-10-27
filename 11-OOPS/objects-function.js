let ob1 = {
    x : 1, y : 2
};

// If you want that whatever change made to the ob1 should not be reflected in ob1
Object.freeze(ob1);

ob1.x = 10;
ob1.z = 20;

console.log(ob1);


// If you want that changes should be made, but new attribute should not be added

let ob2 = {
    x : 1, y : 2
}

Object.seal(ob2);
ob2.x = 10;
ob2.y = 20;
ob2.z = 30;

console.log(ob2);


// Creating new obj from other obj
let o1 = {x : 1, y : 2};

// reference passed
let o2 = o1;

o1.x = 10;
console.log(o1, o2);

// no reference passed 
const o3 = Object.create(o1);

o1.x = 30;

console.log(o1, o3);  // o3 will be empty when logged, but the fields are copied

console.log(o3.x, o3.y);