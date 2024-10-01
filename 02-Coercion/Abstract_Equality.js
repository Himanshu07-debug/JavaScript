// Refer Abstract Equality Algo 

console.log(null == undefined);   // True
console.log(undefined == null);    // True

console.log(10 == "10");          // ToNumber("10") => 10 , 10 == 10  --> true
console.log("10" == 10);          // ToNumber("10") => 10 , 10 == 10  --> true

console.log(false == 0);          // ToNumber(false) => 0, True
console.log(true == 10);          // ToNumber(true) => 1 , 1 == 10 --> False

console.log(10 == {valueOf() {return 10;}});    
// ToPrimitive(obj) with no hint -> hint = number, 10 == 10 --> TRUE

// If obj compared with Obj --> False. [ None of the If statement for obj == obj, Therefore, Return false ]
console.log({} == {});


let ans = 0;

for(let i=0; i < "23" ;i++){
    ans++;
}

console.log(ans);   // 23 [ This is Becz in Abstract Relational Comparison [ Docs ], the String is coerced to a Number ]

let a = 5;

// ToBoolean(a) -> true  --> Therefore "Hello" will be Printed
if(a){
    console.log("Hello");
}

// ToNumber(true) -> 1 ==> 5 != 1 ... therefore, "Hii" will not print
if(a == true){
    console.log("Hii");
}