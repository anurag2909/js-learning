let score = 33
console.log(typeof score); // Output => number

let value = "33";
let valueInNumber = Number(value); // String value converted into number
console.log(typeof valueInNumber); // Output => number

let x = "33abc";
let xInNumber = Number(x); // String value converted into number datatype 
console.log(typeof xInNumber); // number
console.log(xInNumber); // NaN => Not a number 

let y = null;
let yInNumber = Number(y); // null value converted into number datatype 
console.log(typeof yInNumber); // number
console.log(yInNumber); // 0

let z = undefined;
let zInNumber = Number(z); // undefined converted into number datatype 
console.log(typeof zInNumber); // number
console.log(zInNumber); // NaN

// Everything will get converted into respective datatype just their value can be unexpected
// null => 0; undefined => NaN, "33abc" => NaN, true/false => 1/0 (When being converted into number)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

// when being converted into boolean

// if 1 => true, 0 => false
// "" => false;
// "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); 
console.log(typeof stringNumber); // Converted into string

