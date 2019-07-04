// if / else Statements 

var x=1;
var y=2;

/* if (x > y)
{
    console.log(`x is greater than y`);
}
 else
 {
    console.log(`x is not greater than y`);
 } */

 // ELSE IF

 if (x > y)
{
    console.log(`x is greater than y`);
}
 else if (y > x)
 {
    console.log(`y is  greater than x`);
 }
 else
 {
    console.log(`x is equal y`)
 }

 var isMarried=false;

 if (isMarried==0)
 {
     console.log(`Bob is married`); // Cause 0 is always false , and the value of isMarried is false 
 }
 else
 {
    console.log(`Bob will hopefully marry soon`) //"Bob is married"
 }

if (undefined)
{
    console.log(`yes`)
}
else 
{
    console.log(`no`);
}

//Output: no

if(23=="23")  //weakly-typed language
{
    console.log(`23=String 23 is correct`) //printed
}

var age = 20;
if(age < 20)
{
    console.log(`John is teenager`)
}
else if (age >= 20 || age < 30)
{
    console.log(`John is a young man...`);
}
else if (!(age >30))
{
    console.log(`Here not equal call...`)
}
else 
{
    console.log(`John is man`)
}
