function fun(x, fn){

    // x --> variable
    // fn --> callback function

    for(let i = 0; i < x ; i++){
        console.log(i);
    }

    fn();      // callback function called

    // do some other work


}

// callback function passed as named function expressions
fun(10, function log(){
    console.log("Callback function called");
})

// we can create callback function separately as function & then pass them --> NOT function expression this TIME

// NOTE -> never ever called the function while passing callback function as arg



// callback Application --------------------------------->>

let arr = [1, 2, 3, 4];

arr.map(function process(val, index){

    console.log(val, index);

})

// arr.map() function expects a callback function where all the elements of arr are passed as arg in the val to the callback

let x = arr.map(function log(val, index){
    return val*val;
})

console.log(x);  // [ 1, 4, 9, 16 ]
// if no return in the function then x --> [ undefined, undefined, undefined, undefined ]

