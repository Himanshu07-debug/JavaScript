let name = "Himanshu";        // Global Scope variable

function greet(){

    console.log("Hii", name);

    var x = 10;             // function scope variable

    function test(){
        console.log("Tested Successfully", x);
    }
    test();
    console.log(x);

}

// console.log(x); --> ERROR becz x is not inside Global

function greet2(){

    console.log("Hello", name);

}

greet();
greet2();