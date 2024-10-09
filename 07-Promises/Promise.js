
function fetchData(url){

    // synchronously created
    return new Promise(function (resolve, reject){

        console.log("Starting fetching from ", url);
        setTimeout(function process(){

            let data = "Dummy data";
            console.log("Completed fetching the data");

            // return some data on success
            resolve(data);

        }, 4000);

        // this will be called before setTimeOut
        console.log("by");

    });

}


function fetch1(){

    return new Promise(function (resolve, reject){

        for(let i = 0; i < 10000000000; i++){

        }

        console.log("Completed");
        resolve("Lucky");
    })

}

y = fetch1();

// wait for loop execution
// Completed
// promise obj with Lucky set


function demo(val){

    return new Promise(function (resolve, reject){

        console.log("Start");
        setTimeout(function process(){

            console.log("Completed timer");
            if(val%2 == 0){
                resolve("Even");
            }
            else{
                reject("Odd");
            }

        }, 10000);

        console.log("Somewhere");

    })

}


a = demo(5);

// Start 
// Somewhere
// Promise <pending>  ( came becz we will print a becz of storing it inside an variable )
// Completed timer
// now see Promise, there will be in state - fulfillment, and result - Odd


