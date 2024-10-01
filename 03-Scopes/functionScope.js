function greet(){

    var x = 10;             // function scope variable

    function test(){
        console.log("Tested Successfully", x);
    }
    test();
    console.log(x);

}

// console.log(x); --> ERROR becz x is not inside Global

greet();

// console.log(x); --> ERROR becz x is not inside Global
