/* ```Assume you have an algorithm that takes as input the name of a band and it returns the genre of music they play. Make an if else if interpretation of that algorithm with 5 music bands. If the music band is not recognized return a statement that says 'Who are ${bandName}. Never heard of them...'``` */





var rammstein="Rammstein";
var onkelz="Onkelz";
var versengold ="Versengold";
var tokioHotel = "Tokiohotel";
var gorillaz = "Gorillaz";

/* if(bandName == rammstein || bandName == onkelz || bandName == versengold|| bandName == tokioHotel || bandName == gorillaz ){
    console.log(`${bandName} is a cool band dude! :)`)
} */

/* else console.log (`Who are ${bandName}. Never heard of them....`)
  */


 bandName="Versengold";

switch(true) {
    case(bandName==rammstein):
        console.log(`${rammstein} is a cool band dude! They playing Rock :)`)
    break;
    case(bandName == onkelz):
        console.log(`${onkelz} is a cool band dude! They playing Rock :)`)
    break;
    case(bandName == versengold):
        console.log(`${versengold} is a cool band dude! They playing Alternative :)`)
    break;
    case(bandName == tokioHotel):
        console.log(`${tokioHotel} is a cool band dude! They playing Pop :)`)
    break;
    case(bandName == gorillaz):
        console.log(`${gorillaz} is a cool band dude! They playing RnB :)`)
    break;
    default:
    console.log (`Who are ${bandName}? Never heard of them....`)
    }

    