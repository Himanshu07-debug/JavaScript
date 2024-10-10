// Do the same download feature without using Promise ?

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

// Mimicing download without use of callback and promise

async function processing(){

    let downloadData = await fetchData('www.google.com');
    // await --> jab tk fetchData is not resolved, function ke below statement ka execution stop

    console.log("Downloading await completed");

    let file = await writeFile(downloadData);

    console.log("Writing await completed");

    let uploadResponse = await uploadData(file,'www.drive.google.com');

    console.log("Uploading await completed");

    console.log("Completed process with response: ", uploadResponse);

    return true;

}

console.log("Start");
processing();
console.log("end");


let x = processing();
x.then(function (value){
    console.log("Async promise finally resolves with ", value);
})


// O/P -->
// 1. Start
// 2. going to start download from www.google.com
// 3. timer to mimic download started
// 4. end  ( JS do not wait for async task  )
// After 5 sec
// 5. Downlaod complete
// 6. Downloading await completed
// 7. Started Writing Dummy download data in a file
// after 3 sec
// 8. File written successfully
// 9. Writing await completed
// 10. Upload started on url www.drive.google.com filename  result.txt
// 11. Uploading done
// 12. Uploading await completed
// 13. Completed process with response:  SUCCESS





