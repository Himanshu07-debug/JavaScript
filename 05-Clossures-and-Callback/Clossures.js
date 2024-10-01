function todo(task){

    console.log("Start of Todo");
    setTimeout(function fun(){
        console.log("Completed", task);
    }, 5000);
    console.log("End of todo");

}

console.log("Starting");
todo("assignments");
console.log("Ending");


// task value is known to fun() i.e it can access "task" variable even after todo() is ended, This is becz of Clossure



// Clossure is not setting the variable, or Snapshotting, it is the way of Remembering the exact data varaible...

// Snapshotting means putting that task value in place of task.. agar aaisa hota to niche wale me task change nhi hota

function todo(task){

    console.log("Start of Todo");
    setTimeout(function fun(){
        console.log("Completed", task);
    }, 5000);
    
    // changing task variable
    task = "Homework";
    console.log("End of todo");

}

todo("assignments");

// Last O/P line after 5 sec --> 
// Completed Homework


// NOTE --> task variable change kiye, change ho gya printing me.. snapshot nhi hua







// One more Example ------------------------------------>>>

function a(greet){
    return function log(){
        console.log(greet);
    }
}

let x = a("Hii");
console.log(x);         // function defination
x();                    // "Hii"

// NOTE --> greet varaible of a() was remember by log()


function ab(greet){
    return function log(){
        console.log(greet);
    }
}

let y = ab("Hello");

// Long time pass
for(let i = 0; i < 10000000000; i++){}

// Answer will be same, No matter how much time is consumed, the attached functions remember their lexical Scope
console.log(y);
y();







// Let's see more examples ----------------->>

function test(){

    for(var i = 0; i < 3; i++){
        setTimeout(function exec(){
            console.log(`i : ${i}`);
        }, i * 1000);
    }

}

test(); 
// Output --->
// i : 3
// i : 3
// i : 3
// ( REASON --> i gets function scope becz it is declared as "var" )


function test(){

    for(let i = 0; i < 3;i++){
        setTimeout(function exec(){
            console.log(`i : ${i}`);
        }, i * 1000);
    }

}

test(); 
// Output --->
// i : 0
// i : 1
// i : 2
// ( REASON --> i gets block scope becz it is declared as "let" )


function test(){

    for(var i = 0; i < 3;i++){

        let j = i;    // j ko block scope diye i ka .. 

        setTimeout(function exec(){
            console.log(`i : ${j}`);
        }, i * 1000);
    }

}

test(); 
// Output --->
// i : 0
// i : 1
// i : 2
// ( REASON --> j gets block scope becz it is declared as "let" )
