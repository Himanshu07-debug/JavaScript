
// Write a function to download some data from a URL, and without using callBacks ?

// Improved version using Promises

function fetchData(url){

    return new Promise(function (resolve, reject){

        console.log("going to start download");
        setTimeout(function process(){
            let data = "Dummy download data";
            console.log("Downlaod complete");
            resolve(data);
        }, 5000);
        console.log("timer to mimic download started");

    });

}

function writeFile(data){

    return new Promise(function (resolve, reject){
        console.log("Started Writing ", data, " in a file");
        setTimeout(function processWriting(){
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        }, 3000);

    });

}

function uploadData(file, url){
    return new Promise(function (resolve, reject){
        console.log("Upload started on url", url, "filename ", file);
    })
}

console.log("Starting the program");
x = fetchData("www.google.com");
console.log("New promise obj created, downloading still going on");
console.log(x);

// Promise solves the problem of Inversion of control
let downloadPromise = fetchData('www.datadrive.com');
downloadPromise.then(function processDownload(value){
    console.log("Download promise fulfilled");
    let writePromise = writeFile(value);
    writePromise.then(function processWrite(value){
        console.log("writing of file Completed");
            console.log(value);
    })
})


// Promise Hell is there but...
// but we can handle it

let download = fetchData('www.datadrive.com');
download
.then(function processDownload(value){
    console.log("downloading done with following value", value);
    return value;
})
// a new promise is returned by then
.then(function processWrite(value){
    return writeFile(value);
})
.then(function processUpload(value){
    return uploadData(value, 'www.drive.google.com');
})