{
    let x = 10;
    console.log(x);
}

// console.log(x);  --> ERROR


// let inside a function
function fun(){

    console.log(y);     // Error --> y is not declared ( var me declare kiye to chalta, let me nhi )

    let y = 8;
    console.log(y);

}

// let do not allow redeclaration of same variable
let z = 8;
// let z = 9;  --> ERROR , z declare ho chuka hai


// let do not have Complete Global Scope , let's see here -

console.log(r);

let r = 3;

// Upar wla console log of r will give ERROR .. However Global variable accesses ho jaate hai pure file me.. Eg --> var
// Therefore, no Complete Global Scope. Jis line se declare hua let, wha se hi global hai "let"

