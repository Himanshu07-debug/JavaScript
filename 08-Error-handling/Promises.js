// If promises Reject, or directly throw an error using throw keyword 

function fetchData(url){

    // synchronously created
    return new Promise(function (resolve, reject){

        console.log("Starting fetching from ", url);
        setTimeout(function process(){

            let data = "Dummy data";
            console.log("Completed fetching the data");

            resolve(data);

        }, 4000);

        console.log("by");

    });

}

// 1 way --> using err parameter of then
let x = fetchData("abcdef");
x.then(function success(val){
    console.log("val is ", val);
}, function err(err){
    console.log("error is", err);
})


// 2nd way --> none of the .then() handled the error
let y = fetchData("abcdef");
y.then(function success(val){
    console.log("val is ", val);
    return 10;
    // at any time, you can throw error --> throw {error : "new error"}
})
.then(function succ1(v){
    console.log(v);
})
.catch(function errHandler(err){
    console.log("err is", err);
})
.finally(() => {
    console.log("completed execution");
})

// If error is occured then, OUTPUT :
// err is undefined ( in reject, we had return undefined in fetchData())
// completed execution