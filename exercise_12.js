// LOOPS

//1. Write a program to add up the numbers 1 to 20.

for(let i=1; i<=20; i++)
{
    console.log(i)
}

//2. Write a program that will output, “There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” etc.

for (let i=1; i<=10; i++)
{
    console.log(`There is ${i} bottle of beer on the wall`)
}

//3. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for(let i = 1; i<=20; i++)
{
    if(i%2 === 0)
    console.log(`${i} is even.`)

else {
    console.log(`${i} is odd.`)
}
}

//4. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. “2 * 9 = 18").

for (i=0; i<=10; i++)
{
    console.log(i*9);
}
//5. Write a program to calculate the average marks of the following students Then, this average is used to determine the corresponding grade for the class. e.g store the number.. let marks = [80, 77, 88, 94, 68];
// John    90
// Tom    60
// Jane    77
// Maria    81
// Carl    65

// The marks are graded as follows :
// Range    Grade
// <60    F
// <70    D
// <80    C
// <90    B
// <100    A

var students = [['John', 90], ['Tom', 60], ['Jane', 77], ['Maria', 81], ['Carl', 65]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);
if (avg < 60){
    console.log("Grade : F");      
    } 
  else if (avg < 70) {
          console.log("Grade : D"); 
            } 
  else if (avg < 80) 
       {
          console.log("Grade : C"); 
  } else if (avg < 90) {
          console.log("Grade : B"); 
  } else if (avg < 100) {
          console.log("Grade : A"); 
}


//6. Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

//7. Write a program to add the multiples of 3 and 5 under 1000.

let num=0;


for(i=1; i<1000; i++) {
    if(i%3 === 0 || i%5 === 0){
        num+=i
    }
}
console.log(num)

//8. Create an array filled with your friends’ and family’s names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.

let arr=[`Maria`,`Peter`, `Mike`]
for( let i=0; i < arr.length; i++)
{
    console.log(`Hello Maria!`)
    console.log(`Hello Peter!`)
    console.log(`Hello Mike!`)
}

//**Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

console.log(arr.indexOf(`Mike`))

//9. Write a program that will output the following using loops:
// >100 200 300 400 500 600 700 800 900 1000
// >1 2 4 8 16 32 64 128
// >0 2 4 6 8 10
// >3 6 9 12 15
// >9 8 7 6 5 4 3 2 1 0

let num1=``;
for(let i=100; i<=1000; i+=100)
{
    num1 = num1 + i + " ";
}
console.log(num1)

let num2=``;
    for(let i=0; i<=10; i++)
    {
      if(i%2 === 0)
        num2=num2+i+ " ";
    }
    console.log(num2);
    

    let num3=``;
    for(let i=3; i<=15; i++)
    {
      if(i%3 === 0)
        num3=num3+i + " ";
    }
    console.log(num3);

    let num4=``;
for(let i=9; i >=0; i--)
{
    num4 = num4 + i+ " "
}
console.log(num4)


//**Bonus**
// 10. isPalindrome
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

var originalStr =`racecar`;
var reverseWord=originalStr.split(``).reverse().join(``);
if(originalStr===reverseWord)
console.log(true);
else {
  console.log(false)
}