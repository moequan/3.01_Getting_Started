/*Data Types
Strings (represents textual data)
Number
Boolean
Undefined
Null
Symbol
*/


// Strings

let str="Hello";
let str1='Single quote are ok too.';
console.log(str, str1); //Hello Single quote are ok too.
let name="John";
console.log (`Hello, ${name}`); //Hello,John

console.log (`the result is ${1+2}`); //The result is 3

let myName="Maurice 1234567890";
console.log (myName[9], myName[20]); //4 undefined
console.log (myName.length);

//Numbers

console.log (1/0); //infinity
console.log ("this is not a number"/2);  //NaN

let currentYear=2019;
console.log (currentYear); //2019
console.log (currentYear[3]); //undefined


let n=12.344
console.log (n); //12.344

let myNumber=1234e17; //123400000000000000000
console.log (myNumber);

let myNumber1=1234e-3;
console.log (myNumber1); // 1.234

let myNumber2=1234e-5;
console.log (myNumber2); // 0.01234

let newNumber=20;
console.log (newNumber * Infinity); //Infinity
console.log (newNumber-Infinity); //-Infinity

let country="Germany"
console.log (country/newNumber); //NaN


//concatenation

let concat1="Hello";
let concat2="World";
let concat3=concat1 + concat2;
console.log (concat3);
console.log (concat1 + " " + concat2 + "!");

//concatenation

let num1=20;
let num2=20;
let num3="hello";
let num4=num1+num2+num3;
console.log (num4); //40hello

let num5="hello";
let num6=num5+num1+num2;
console.log(num6); //hello2020
let num7= num5+(num1+num2);
console.log(num7); //hello40

//Booleans

let isGreater= 4 > 1;
console.log (isGreater);

let isDay=true;
console.log(isDay);
let isNight=false;
console.log (isNight);

//Object

let myObject= {
                key1:"Value",
                key2: 12345,
                key3: {
                    newObject:"hello,world"
                }

};
console.log (myObject);

//personal infromation object

var infoObject= {
    firstName:"Maurice",
    lastName:"Schubarth",
    adress:{
        streetName:"septimer str 111",
        plz:12687,
        city: "Berlin",
    }
};
console.log (infoObject);
console.log (infoObject.adress.city);
console.log (infoObject.lastName);

//typeof

console.log(typeof null);
console.log (typeof true);  


