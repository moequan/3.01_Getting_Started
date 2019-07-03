let poem = 'To be or not to be';
 
//toUpperCase
var steve=poem.toUpperCase() //TO BE OR NOT TO BE
 console.log(steve);

 //toLowerCase
 steve=poem.toLocaleLowerCase(); //to be or not to be
 console.log(steve)

 //endsWith Result: True or false

 let result=poem.endsWith('e');
 console.log(result); //true

 //Slice

 result=poem.slice(5,10);
 console.log(result); //or n 

 //String.indexOf
 var paragraph='The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
 var searchTerm = 'lazy';
 var indexOfFirst = paragraph.indexOf(searchTerm);
 console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst); 
//The index of the first "dog" from the beginning is 40

//String.includes

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'dog';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
//The word "fox" is in the sentence

//String.chatAt

var sentence = 'The quick brown fox jumps over the lazy dog.';

var index = 4;

console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
//The character at index 4 is q

 //String.repeat

 var chorus = 'Because I\'m happy. ';

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(5));

//Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 

//Math Floor Method 

console.log(Math.floor(1.6)); //1
console.log(Math.floor(3.5)); //3

// Math Round Method

console.log(Math.round (2.5)); //3
console.log(Math.round (2.4)); //2
console.log(Math.round (-2.49)); //-2
console.log(Math.round (-2.70)); //-3

//Math Ceil Method

console.log(Math.ceil(0.60)); //1
console.log(Math.ceil(0.30)); //1
console.log(Math.ceil(0.60)); //1
console.log(Math.ceil(-5.1)); //-5


//conversation

console.log(parseFloat("123.456").toFixed(2));
var num=123.34567;
console.log(typeof num);
var strNum=num.toFixed(2);
console.log(typeof (strNum));
console.log(typeof (parseInt(strNum)));



