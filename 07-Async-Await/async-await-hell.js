function fetchData(url){

    return new Promise(function (resolve, reject){

        console.log("going to start download from ", url);
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
            resolve(fileName);
        }, 3000);

    });

}

function uploadData(file, url){
    return new Promise(function (resolve, reject){
        console.log("Upload started on url", url, "filename ", file);
        setTimeout(function processUpload(){
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}



async function processing() {
    
    let downloadedData = await fetchData('www.google.com');
    let file = await writeFile(downloadedData);

    // So many await here... more complex structures can be there..
    let upload1 = await uploadData(file, 'www.drive.google.com');
    let upload2 = await uploadData(file, 'www.onedrive.com');
    let upload3 = await uploadData(file, 'www.metabase.com');

    return upload1 + upload2 + upload3;

    // called as async - await hell

}


// To handle this.. we have Promise.all or Promise.any

let downloadPromise = fetchData('www.google.com');
let writePromise = writeFile("dummy data");
let uploadPromise = uploadData('result.txt', 'www.drive.google.com');

Promise.all([downloadPromise, writePromise, uploadPromise]).then(function (value){
    console.log(value);
    // value --> ['Dummy data', 'result.txt', 'SUCCESS'] 
})


// Example 2 -------------------------------->>

// async await hell 

async function processing() {
    
    let downloadedData1 = await fetchData('www.google.com');
    let file1 = await writeFile(downloadedData1);
    let upload1 = await uploadData(file1, 'www.drive.google.com');

    let downloadedData2 = await fetchData('www.google.com');
    let file2 = await writeFile(downloadedData2);
    let upload2 = await uploadData(file2, 'www.onedrive.com');

    let downloadedData3 = await fetchData('www.google.com');
    let file3 = await writeFile(downloadedData3);
    let upload3 = await uploadData(file3, 'www.metabase.com');

    return upload1 + upload2 + upload3;

}

// the above one can be handled as below -->

async function process1() {
    
    let downloadedData = await fetchData('www.google.com');
    let file = await writeFile(downloadedData);
    let upload = await uploadData(file, 'www.drive.google.com');

    return upload;

}

async function process2() {
    
    let downloadedData = await fetchData('www.google.com');
    let file = await writeFile(downloadedData);
    let upload = await uploadData(file, 'www.onedrive.com');

    return upload;
}

async function process3() {
    
    let downloadedData = await fetchData('www.google.com');
    let file = await writeFile(downloadedData);
    let upload = await uploadData(file, 'www.metabase.com');

    return upload;

}

Promise.all([process1(), process2(), process3()]).then(function processing(val){
    console.log(val);
})
