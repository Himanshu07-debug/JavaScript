// When there are Multiple conditions to check ( 10 - 15 ), if-else is classy, USE Switch

let exp = "%";
let a = 10;
let b = 3;

switch(exp){

    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        console.log("Invalid input");
        break;
    
}