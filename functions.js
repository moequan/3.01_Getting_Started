//Start Define function

/*

showMessage();

console.log('before function');

function showMessage() {
  console.log('Hello Everyone');
}

function showMessage() {
  console.log('Hello second function defination');
}


console.log('after fuction');

//showMessage();

*/

//do exercise palindrom with function.
//you can assign any string which you want to check it and print result.

// function isPalindrom() {
//     var originalStr = 'madaM';
//     originalStr = originalStr.toLowerCase(); // convert into lowercase : madam
//     var reverseStr = originalStr.split(''); // [ 'm', 'a', 'd', 'a', 'm' ]
//     reverseStr = reverseStr.reverse(); // [ '1', 'm', 'a', 'd', 'a', 'm' ]
//     reverseStr = reverseStr.join(''); // 1madam
  
//     if (originalStr == reverseStr) {
//       console.log(true);
//     } else {    
//       console.log(false);
//     }
//   }
  
//   isPalindrom(); 
  
//   //Define a Function : Function Expressions
  
//   const showMessage = function() {
//     console.log("I am function expressoin");
//   };
  
//   showMessage();
  
//   let a=10;
//   let b=a;
//   console.log(b);
  
//   //this will not work
//   //const copyFunc=showMessage();
//   //below will work, as it is simple variable assignment
//   const copyFunc=showMessage;
  
//   copyFunc();
  
//   var func1= function() {
//     console.log("I am function expressoin - func1");
//   };
  
//   func1();
  
//   var func2= function() {
//     console.log("I am function expressoin - func2");
//   };
  
  
//   func1=func2;
//   func1();
  
//   func1=func1;
  
//   func1();
  
//   //define with parameters
//   const showMessageWithParam = function(message) {
//     console.log(message);
//   };
  
//   showMessageWithParam("hallo DCI");
//   showMessageWithParam("abcede");
  
//   //Define a arrow function expression
  
//   const showMessageWithArrow = () => {
//     console.log("I am arrow function");
//   };
  
//   showMessageWithArrow();
  
//   const showMessageWithArrowWithParm = (message) => {
//     console.log(message);
//   };
//   showMessageWithArrowWithParm("I am arrow function with param");
  
//   //with {}
//   //let sum =(a,b) => { console.log (a+b);};
//   //sum(4,5);
  
//   //without {}
//   let sum =(a,b) => a+b;
//   console.log(sum(4,5));
  
//   //Parameters vs Arguments
  
//   const param1=true;
//   const param2=false;
  
//   function twoParams(p1,p2){
//     console.log(p1,p2);
//   }
  
//   twoParams(param2,param1);
  
//   function showGreeting(from,text){
//     console.log(from +':' + text);
//   }
//   showGreeting('Ann','Hello');
//   showGreeting('Ann');
  
//   function showGreetingDefaultValue(from,text="no text given"){
//     console.log(from +':' + text);
//   }
//   showGreetingDefaultValue('Ann');
  
//   //define 3 parameters function
//   function aboutMe(firstName,lastName,work)
//   {
//     console.log('My name is '+ firstName + " " + lastName + " and I am a "+ work);
//   }
  
//   aboutMe('ali','mohammed', 'IT engineer');
  
//   //function with two default values of the parameters
//   function personInfo(firstName, yearOfBirth,lastName="Smith",nationality="germany")
//   {
//     //Part 1
//      //console.log(firstName + " " + lastName + " " + yearOfBirth + " " + nationality);
  
//      //Part 2
//      this.firstName1=firstName;
//      this.lastName1=lastName;
//      this.yearOfBirth1=yearOfBirth;
//      this.nationality1=nationality;
//      console.log(this.firstName1 + " " + this.lastName1 + " " + this.yearOfBirth1 + " " + this.nationality1);
  
//   }
  
//   personInfo('John',1990);
//   personInfo('John',1990,'Klass');
//   personInfo('John',1990,'Klass','USA');
  
  
//   //Function Return
//   function test(){  }
//   console.log(test());
  
//   function test1(){return true;}
//   console.log(test1());
  
//   function  sumWithReturn(a,b)
//   {
//     return a+b;
//   }
//   let result=sumWithReturn(1,2);
//   console.log(result);
  
//   function doNothing()
//   {
//     /* empty */
//   }
//   console.log(doNothing()===undefined);
  
//   function doNothing1()
//   {
//     return;
//   }
//   console.log(doNothing1()===undefined);
  
  
  //Recap

  //I would like to build an algorithm gives me the result of the following multiplications ( 13*5, 22*6, 24*24)

//  let a = 13, b = 5, c = 22, d = 6, e = 24;

//   let multi1 = a*b;
//   console.log(multi1)

//   let multi2 = c*d
//   console.log(multi2);

//   let multi3 = e*e
//   console.log(multi3); 

  //in function

//   function multiplication (){
//     let a = 13, b = 5, c = 22, d = 6, e = 24;

//   let multi1 = a*b;
//   console.log(multi1)

//   let multi2 = c*d
//   console.log(multi2);

//   let multi3 = e*e
//   console.log(multi3); 
//   }
//   multiplication()

  

//   function multiplication (a,b){
//         if((a) !==`number` || typeof(b) !== `number`)
//         {
//             console.log(`One of your arguments is not a number `)
//             return;
//         }
//       let mult = a*b;
//       console.log(mult)
//   }
//   multiplication(13, 14)
//   multiplication(13,5)
//   multiplication(22,6)
//   multiplication(24,24)


// function multByTwentyFive(a, b = 25){
//     console.log(a*b)
// }
// multByTwentyFive(5)


//CHECK IF A NUMBER PERFECTLY DIVIDED BY 7

// function checkIfDividedBySeven(num){
//     if(isNaN(num)){
//         return false;
//     } 
//     if(num%7 === 0) 
//     console.log(`${num} is divided by seven`)
//     else  return false;

// }
// checkIfDividedBySeven(22)
// let res = checkIfDividedBySeven(`steve`);
// console.log(res)
// checkIfDividedBySeven(`steve`)
// checkIfDividedBySeven(49)



//Calling a function within a function
//Input:5
//1st function:5*5=25
//2nd function: 25*12


// function selfMulti(num){
//   let res=num*num
//   console.log(`I have multiplied ${num} by itself`)
//   console.log(`I will call multiTwelve for ${res}`)
//   multiTwelve(res)
//   console.log(res)
// }
// function multiTwelve(num)
// {
//     console.log(`I have inside multiTwelve`)
//     let res = num *12
//     console.log(res)
//     console.log(`I am done calling function`)
// }
// console.log(`I am about to calling functions`)
// selfMulti(5)
// console.log(`I am done calling functions`)




// Breaking the palindrome in functions

// We take the string 
// We make it lowerCase or upperCase
// We produce the reversed string 
// We check if original and reverse strings are identical

function checkIfPalindrome (phrase) {

  // We take the string
  // We make it lowercase or uppercase
  let lowerPhrase = transformToLowercase(phrase)
  // We produce the reversed string
  let reversedPhrase = reversePhrase(lowerPhrase);
  // We check if original and reverse strings are identical
  let res = comparePhrase(lowerPhrase, reversedPhrase)

  console.log(`The word "${phrase}" is a palindrome: ${res}`)
}

function transformToLowercase(str) {
  let lc = str.toLowerCase()
  return lc;
}

function reversePhrase(sent) {
  let res = ''
  let l = sent.length - 1

  for(let i = l; i >= 0; i--){
      res = res + sent[i]
  }

  return res
}

function comparePhrase(low, rev) {
  if(low == rev) {
      return true
  }
  else {
      return false
  };

  // if(low == rev)
  //     return true
  // else return false

  // let res = (low == rev) ? true : false
  // return res

  // return (low == rev) ? true : false
}

// Our tests
checkIfPalindrome('level')  // Return true
checkIfPalindrome('mAdaM')  // Return true, but send a message that complains about the input
checkIfPalindrome('baBYlon') // Return false
checkIfPalindrome('i level madam level i') // Return true
//function checkIfPalindrome (phrase) {

