// Mimicing a function of downloading a file

// See how to handle the order of events, use of callback leads to hell..

// NOTE --> CallBack is the way of returning response to the calling function by the Runtime environment obj..
//          setTimeOut will come into execution some time later, uska outer function khatm.. so the response to the calling will go by callback

// There is no Other way except Promise.. This 2 are the only way to do so




function fetchCustom(url, fn){

    // download content of the URL
    // this downloading take some time
    // we will download the content from URL and whatever will be the result, will pass it to the callback

    console.log("Start downloading from", url);
    
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy Data";
        fn(response);  // returing response to the calling one
    }, 3000);

}

function writeFile(data, fn){

    // this function writes data in a new file
    console.log("Started writing data", data);

    setTimeout(function process(){
        console.log("Writing completed");
        let fileName = "output.txt";
        fn(fileName);
        console.log("Writing ended");
    }, 4000);

}

function uploadFile(fileName, newurl, fn){

    console.log("Upload started");
    setTimeout(function process(){
        console.log("File", fileName, "uploaded successfully o", newurl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
        console.log("upload ended");
    }, 2000);

}


fetchCustom("www.google.com", function downloadCallback(response){
    console.log("Download response is", response);
    writeFile(response, function writeCallback(filenameResponse){
        console.log("new file written is", filenameResponse);
        uploadFile(filenameResponse, "ww.drive.google.com", function uploadCallback(uploadResponse){
            console.log("Successfully uploaded", uploadResponse);
        })
    } )
});


// DRY RUN

// See here, fetchCustom is completed by its synchronous move...
// downCallback is called later by the runtime becz setTimeOut lga tha.. then it get executed and called the writeFile function..
// It also get Completed.. setTimeOut of it called the writeCallback
// then it called the uploadFile and then uploadCallback is called...

// this is only CALLBACK HELL