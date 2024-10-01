setTimeout(function (){
    console.log("hello");
}, 2000) 
// after 2 sec, hello will print

let id1 = setTimeout(function log(){
    console.log("task 1");
}, 10000);                                  // 10 sec

let id2 = setTimeout(function (){
    console.log("task2");
    clearTimeout(id1);                      // this will delete the task1 timer ---> no printing from task1
}, 3000);                                   // 3 sec


// You want that ki jo bhi task phle hoye wo wha pe hi end output


// REMEMBER --> Normal Js things without function are faster than timeout

setTimeout(function (){
    console.log("hello");
},0);

for(let i=0;i<70;i++){
    console.log("hii");
}

// OUTPUT -->
// 70 times hii
// hello