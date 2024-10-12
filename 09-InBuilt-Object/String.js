// String obj

let str = new String("Himanshu Sharma");

console.log(str);
console.log(typeof str);  // Object

// Length 
console.log(str.length);

// lowercase 
console.log(str.toLowerCase());

// uppercase 
console.log(str.toUpperCase()); 

// at 
console.log(str.charAt(4));
console.log(str.charCodeAt(4));   // ASCII value

// startwith 
console.log(str.startsWith("My"));   // -> False

// endsWith 
console.log(str.endsWith("Sharma"));   // -> True

// replace 
console.log(str.replace("Him","Hiim"));

let a = "  Devil  ";

// trim 
console.log(a);
console.log(a.trim());