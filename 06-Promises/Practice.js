// 1st ----------------------------------------------------->>>

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("timer 1 done");
}, 0);

for(let i = 0; i < 1000000000; i++){

}

let x = Promise.resolve("Himanshu Promise");
x.then(function processPromise(value){
    console.log("Whose promise ? ", value);
})

setTimeout(function timer2(){
    console.log("timer 2 done");
}, 0);

console.log("end of the file");


// O/P line by numbers ------>>

// 1. Start of the file
// timer1 to the runtime
// for loop running , meanwhile timer1 enters to the event queue
// Promise Resolved.. so .then() called and callback added to micro-task queue
// timer2 to the runtime
// 2. End of the file ( timer2 enters event queue )

// 3. Whose promise ? Himanshu Promise

// 4. timer 1 done ( micro wala empty )
// 5. timer 2 done




// 2nd  ------------------------------------------------------->>>

function dummyPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve("timer's promise")
        }, 10000);
    })
}


console.log("Start of the file");

setTimeout(function timer1(){
    console.log("timer 1 done");
    let x = dummyPromise();
    x.then(function promiseX(value){
        console.log(value);
    });
}, 0);


let y = Promise.resolve("Himanshu Promise");
y.then(function processPromise(value){
    console.log("Whose promise ? ", value);
})

setTimeout(function timer2(){
    console.log("timer 2 done");
}, 0);

console.log("end of the file");


// Output --> 

// 1. Start of the file
// timer1 in runtime (added in event queue)
// y Promise obj resolved, added in Micro-task queue
// timer2 in runtime (added in event queue)
// 2. End of the file

// 3. Whose promise ? Himanshu Promise

// timer1 goes into the call stack
// 4. timer 1 done
// called dummyPromise, it comes to the call Stack.. then a new Promise created and as it contains
// async one, the resolve will happen 10 sec later.. So current Promise will be <pending> & all the
// functions will popped from the call stack... 

// Now multitask queue is Empty and timer2 in event queue
// 5. timer 2 done

// After 10 sec.. Event queue me dummyPromise ke promise ka setTimeOut aaya. Event queue se nikla nikla.. Run hua, Resolve hua...
// PromiseX is added in multi-task queue
// 6. timer's promise


// NOTE --> if created Promise sec is 0 sec, then the promise will enter the multi-task queue &
//          O/P will be --> 5th and 6th line toggle

// call stack se removal of functions of timer1 me 1 sec is completed
