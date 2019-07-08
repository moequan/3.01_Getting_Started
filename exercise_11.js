//1 
let num = 1
console.log(12345678910)
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("--------------------------------")
//2 
let string = "*";
for (let i = 0; i < 5; i++) {
    console.log(string)
    string = string + "*"
}

console.log("--------------------------------")

for (let i = 1; i <= 20; i++) {
    console.log(`This is iteration number ${i}`)
}

console.log("--------------------------------")

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(`EVEN WUUUP WUUUP ${i}`)
    else {
        console.log(`ODDDDDDD${i} `)
    }
}

console.log("--------------------------------")

for (let i = 0; i <= 100; i++) {
    if (i % 6 == 0)
        console.log(` UUUUH, I am perfect :): ${i}`)
    else {
        console.log(`${i} I am ugly :(`)
    }
}

console.log("--------------------------------")

var babylon = "BA-" 

for(let i = 1; i < 5; i += 1) {
  babylon=babylon + "BA-"
}
console.log(babylon + "BY-LON");

console.log("--------------------------------")

for (let i = 0; i < 3; i++) {
    console.log(` I am a normal for loop ${i}.`);
   ;
    for( let j = 0; j<=2; j++)
    console.log ( `I am a nested a for loop ${j}`)
}

console.log("--------------------------------")

let star ='';

for (let i=2; i<=2; i++) {
   star = star + '*';
   console.log(star)
   for (let j=0; j<=2; j++) {
   star = star + '!'
   console.log(star)
}
}

console.log("--------------------------------")

let  num1=2;  num2=900;

for (let i = 2; i <= 4; i++) {
    console.log(i);
   ;
    for( let j = 0; j <= 2; j++){
        num2++
        console.log (num2)
       
    }
    }

    console.log("--------------------------------")

    let star2 = "*" ;
    let star1 = "*****";
for (let i = 5; i >= 0; i--) {
    star1-star2
    console.log(star1)}
  