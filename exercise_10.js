/* Write and while block that prints out all the numbers from 0 till you current age.
In 1988 i was 0 years old.
In 1989 i was 1 year old.
Etc etc et */



/*  let age = 0;
let year = 1993;

do {
        console.log(`In ${year} i was ${age} years old.`) 
        year++;
        age++;
} while (age <= 25);  */

/* Write a while block that returns the hour of a day (0 till 24). 
If the hour is 0 till 8 return 'It's still night outside'
If the hour is 9 till 16 return 'OHMAGORD it's hot outside'
If the hour is 17 till 22 return 'It's quite better actually now'
If the hour is 23 till 24 return 'Bye bye i am going to bed'
 */

 let time = 0;

do {
if(time >=0 && time <=8){
    console.log(`Its still night outside`)
    
}
else if (time > 8 && time <= 16){
console.log(`'OHMAGORD it's hot outside'`)
    
}
else if (time > 16 && time <= 22){
    console.log(`It's quite better actually now`)
        
    }
    else {
        console.log(`Bye bye i am going to bed`)
        
    }
    time++
} while (time <= 24)
 

