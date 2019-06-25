//Data Types Exercises P2**
//**Strings, Numbers, Booleans, Null, undefined data types & typeof operator**

//1. Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console..

let length = 16.78; // Number
let lastName = "Johnson"; //String
let car = ""; //String
let isOpen = true; //Boolean

console.log (typeof length);
console.log (typeof lastName);
console.log (typeof car);
console.log (typeof isOpen);

//2. Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

let ageMark=22;
let ageJohn="20";
console.log (ageMark,ageJohn);

//3. Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

let olderThan=20 < 22;
console.log ("John is than mark : ", [olderThan])

//4. Declare a variable called x. Do not assign a value. Print x's data type to the console.
/* var x;
console.log(x); */

//5. Assign a string to x. Print x's data type again.

let x="bla";
console.log (x);

//6. Print the last character of x's string to the console.
console.log (x[2]);

//7. Print the length of x to the console, as well as the data type of x's length.

console.log(x.length);

//8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.

let a=1; 
let b=2;
let c=3;
console.log(a==b);
console.log(a==c);
console.log(b==c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//9.  What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

console.log (typeof Infinity); //Number

//10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".

let theNumber=55;
isNaN(theNumber);
console.log (isNaN(theNumber)) //false

//11. Print the data type of isNaN(variable) to the console.

console.log (typeof isNaN(theNumber)); // Boolean
