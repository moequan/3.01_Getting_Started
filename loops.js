//forLoops

/* let name = `Maurice`;
for (let i = 0; i < 5; i++) {
    console.log(`This is Loop number ${i}`)
    name = name + name
    console.log(name)
    console.log(`This is the end of Loop number ${i}`)
} */

/* let amount = 2;

for(let i=5; i > 0; i--  ) {
    console.log(`this is Loop number ${i}`)
    amount = amount * amount
    console.log(amount);
    console.log(`this is the end of loop ${i}`);
} */

/* for (let i = 0; i < 100; i++) {
    if(i%17 == 0)
    console.log(`the first number that is being divided perfectly divided by 17 is : ${i}`)

 else {
    console.log(`${i} is no cool!`)
}
}
 */

//Nested Loops

let string="!"

for (let i = 0; i <= 5; i++) {
   
    string=string+`_`;
    console.log(string)

    for( let j = 0; j<=5; j++)
    string=string+ `-`;
    console.log ( string)
}