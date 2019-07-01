//**Operators Exercises**


//These exercises are aimed at making you familiar with the aritmetic operators. Print all your results to the console.

//Declare two variables "x" and "y" and assign number values.

var x = 10;
var y = 15;

//1. Add x and y, and print the result to the console.

var x = 10;
var y = 15;
console.log(x + y);

//2. Subtract y from x, and print the result to the console. Then, subtract x from y and print the result to the console.

console.log(x-y); //-5
console.log(y-x) //5

//3. Multiply x and y, and print the result to the console.

console.log(x*y)    //150

//4. Divide x and y, and print the result to the console. 

console.log(x/y) //1.5

//5. Declare another variable "z" with the value "10". Multiply x and y. Then, divide the result by z. Store the result in a new variable named "resultOne". Print "result" to the console.

var z = 10;
var resultOne = ((y*x)/10);
console.log(resultOne);

//5. Declare two variables "a" with the value of 15 and "b" with the value of 9. Print the remainder when a is divided by b. 

var a = 15;
var b = 9;
console.log(15%9); //6

//6. Declare another variable "c" with the value of 20. Add a and b, then multiply the result by c. Store the result in variable "resultTwo".  Print "resultTwo" to the console.

var c = 20; 
resultTwo = ((a+b)*20);
console.log(resultTwo);


//7. Increment a. Print the result to the console.
a++;
console.log (a);

//8. Decrement b. Print the result to the console.
b--;
console.log (b)

//9. Subtract a from b and store this in a new variable "d". Add d and c. Print the result to the console.
 
var d = ((b-a));
console.log (d);
console.log (d+c);

//10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.

console.log(resultOne%resultTwo);
