// var inside a function  -------------->> get Functional Scope

function fun(){

    console.log(x);        // undefined

    var x = 10;            // x will have functional Scope
    console.log(x);

}

// console.log(x);         ERROR


// var inside a block ----------->> Get Global Scope

{
    var y = 10;            // becomes Global due to var
    console.log(y);
}

console.log(y);

if(true){
    var z = 8;
}

console.log(z);

if(false){
    var a = 30;           // 
}

console.log(a);         // this will Output undefined  --> Lexical Scoping 

// NOTE -> if(false) me bhi declared "a" JS engine ne consider kiya ---> Becz JS is not interpreted. Usne phle read kar liya hai (Compile)..
//         JS is reading Twice


// var declare Globally

var b = 50;

console.log(b);         // it has Global scope

