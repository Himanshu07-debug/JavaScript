// current date
let date = Date();  
console.log(date);   // Sat Oct 12 2024 18:21:16 GMT+0530 (India Standard Time)


// Date obj Initialization

date = new Date();
console.log(date);   // 2024-10-12T12:51:16.042Z

date = new Date(2003,3,16);   // 3 -> April (0th based indexing) , in day also , 03 => not allowed
console.log(date);           // 2003-04-15T18:30:00.000Z


date = new Date("2003-04-16");  // No 0 indexing
console.log(date);              // 2003-04-16T18:30:00.000Z


// Decoding the response get by the Date constructor

date = new Date("2003-04-16T11:55:21Z");   
console.log(date.toString());                // Wed Apr 16 2003 17:25:21 GMT+0530 (India Standard Time)     
console.log(date.toDateString());            // Wed Apr 16 2003
console.log(date.toTimeString());            // 17:25:21 GMT+0530 (India Standard Time)

// It is mostly used to convert current date to diff format
console.log(date.toISOString());
console.log(date.toUTCString());


// Get methods
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// Set Value 
let birthday = new Date();  // current date taken
console.log(birthday);

birthday.setYear(2003)
console.log(birthday);     

birthday.setMonth(3);      // 0th based indexing
console.log(birthday);

birthday.setDate(16);
console.log(birthday);

