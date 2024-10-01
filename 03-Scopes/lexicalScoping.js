var teacher = "Himanshu";   

function fun(){    
    console.log(subject);          // "undefined" in Execution Phase 
    var teacher = "Lucky";  
    teachingAssistant = "tanmay";    // no formal Declaration, will not get Scope in Parsing phase, AutoGlobals in Execution Phase.
    var subject = "JS";
    console.log(teacher);            // Lucky
    console.log(teachingAssistant);  // tanmay
}

console.log(teacher);                // Himanshu
fun();                               
console.log(teachingAssistant);      // tanmay

// NOTE 1 --> 
// When in the execution Phase, console.log(subject); this line is encountered, "subject" was declared and assigned a Scope, but value of the 
// variable is still to assign by execution Phase. 
// Therefore Subject has Empty bucket --> undefined



function gun(){

    ta = "tanmay";
    console.log(ta);        // tanmay
    var ta = "JD";

}

gun();

// NOTE 2 -->
// Here, During the Parsing phase, ta as it is once have formal declaration, it will get Scope of gun().
// During the execution phase, Scope manager look for ta variable within the scope of gun() , it get it , Updates ta to "tanmay"
// the next line, tanmay get print and then again the value is updated to JD in next line



// TYPE ERROR ------------------------->>

var fun2 = 10;

function gun2(){
    console.log("hello world");
}

gun2();         // hello world
fun2();         // fun2 is present in Scope but it is not a function.. So it cant be called



// REMEMBER ----->
// While Deciding the Scope in Parsing phase, formal declaration var, let, const properties also need to be considered..
// I mean iss varaible ka scope kitna rhnga..
// agar var me kiye to before declaring likh sakte hai... let me nhi


fun3(x, y);
var x = 10;
var y = 20;
function fun3(x, y){
    console.log(x + y);       
}

// In second phase, undefined + undefined --> NaN

function fun4(val){
    var student;
}

function run(){
    console.log(student);
}

student = 10;                   // in 2nd phase, at this line --> Auto Global scope to student

function gun5(){
    console.log(student);
    student = 100;
}

gun5();                // 10
run();                 // 100


// Another example ----->

gun6();
function gun6(){ console.log("hi") };

function gun6() { console.log("hello") };   // hello is printed becz in 1st phase, at this line gun6() body was updated

// ------------------------

var teacher = "Rishiraj";
function fun(){
    teacher = "pulkit";
    console.log("Hi", teacher);
}

fun();
console.log(teacher);

// OUTPUT -->
// Hi pulkit
// pulkit