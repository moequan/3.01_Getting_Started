//Escaping spiecial characters

console.log ( 'Hi there my name is D\'Angelo') // "\" is solving the errors.

// THE TERNARY OPERATOR

let sunny = true;
let happy =  sunny ? 35 : 12; 
console.log (`Is it sunny?" : ${sunny}`)
console.log (`Temperatur" : ${happy}`)

//Mathematical operators 

let myAge = 25;
let ageVlad = 32;
console.log (`Am I younger than Vlad" ${myAge < ageVlad}`)
console.log (`Am I younger than Vlad" ${myAge <= ageVlad}`)
console.log (`Am I younger than Vlad" ${myAge === ageVlad}`)
console.log (`Am I younger than Vlad" ${myAge >= ageVlad}`)
console.log (`Am I younger than Vlad" ${myAge !== ageVlad}`)

//Logical operators (AND/OR)            AND=&& ; OR=||


//AND

let password=true; 
let username=true; 

let login = (password && username);
console.log(`Can I log In? : ${login}`);

let age = 25;
let validId=true;


let enterTheClub = (age >= 18) && (validId);
console.log(`Can I enter the Club? : ${enterTheClub}`)

//OR

let wig=true; 
let ID=true;
let TheClub = wig || ID;
console.log(TheClub);

let newClub = ((age >= 18) && (ID)) || wig; 
console.log(newClub)




