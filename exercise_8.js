/* Assume you have a club that only people named Flo, Swantje, Sam, Mafe and Irem can enter. Make an if else if algorithm that will check if you can enter that club based on your name. Then do the same with a switch case.If you can not enter the club return 'Sorry ${name}, you should change your name and come back tomorrow.'```
Nachrichteneingabe

 */




var myName="Maurice";
var swantje="Swantje";
var irem="Irem";
var sam="Sam";
var mafe="Mafe";



/* if(myName == swantje || myName == irem || myName == sam || myName == mafe ){
    console.log(`Come in da Club`)
}

else console.log (`Sorry ${myName}, you should change your name and come back tomorrow.`)
 */
//Switch

switch(true){
case(myName==swantje):
    console.log(`Come in da Club`)
break;
case(myName == irem):
    console.log(`Come in da Club`)
break;
case(myName == sam):
    console.log(`Come in da Club`)
break;
case(myName == mafe):
    console.log(`Come in da Club`)
break;
default:
    console.log(`Sorry ${myName}, you should change your name and come back tomorrow.`)
}
