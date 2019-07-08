// //1 
// let num = 1
// console.log(12345678910)
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// console.log("--------------------------------")
// //2 
// let string = "*";
// for (let i = 0; i < 5; i++) {
//     console.log(string)
//     string = string + "*"
// }

// console.log("--------------------------------")

// for (let i = 1; i <= 20; i++) {
//     console.log(`This is iteration number ${i}`)
// }

// console.log("--------------------------------")

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0)
//         console.log(`EVEN WUUUP WUUUP ${i}`)
//     else {
//         console.log(`ODDDDDDD${i} `)
//     }
// }

// console.log("--------------------------------")

// for (let i = 0; i <= 100; i++) {
//     if (i % 6 === 0)
//         console.log(` UUUUH, I am perfect :): ${i}`)
//     else {
//         console.log(`${i} I am ugly :(`)
//     }
// }

// console.log("--------------------------------")

// // //var babylon = "BA-" 

// // for(let i = 1; i < 5; i += 1) {
// //   babylon=babylon + "BA-"
// // }
// // console.log(babylon + "BY-LON");

// // let babylon = "";

// // for (i = 0; i < 7; i++)
// // {
// //     if ( i !== 6) {
// //         if ( i !==5) {
// //             babylon += "BA-"
// //         }
// //         else {
// //             babylon += "BY-"
// //         }
// //     } else {
// //         babylon += "LON"
// //     }

// // }console.log(babylon)
// // BA-BA-BA-BA-BA-BY-LON (5 BAs)
// var str = '';
// for (var i = 1; i < 7; i++) {
//    if (i < 6) {
//    str += 'BA-';
//    } else if (i == 6) {
//        str += 'BY-';
//    } else{
//        str += 'LON';
//        console.log(str);
//    }
// }



// console.log("--------------------------------")

// for (let i = 0; i <= 2; i++) {
//     console.log(` I am a normal for loop ${i}.`);
//    ;
//     for( let j = 0; j<=2; j++)
//     console.log ( `I am a nested  for loop ${j}`)
// }

// console.log("--------------------------------")

// let star ='';

// for (let i=0; i<=2; i++) {
//    star = star + '*';
//    console.log(star)
//    for (let j=0; j<=2; j++) {
//    star = star + '!'
//    console.log(star)
// }
// }

// // var str = '';
// // for (var i = 1; i < 4; i++) {
// //    str += '*';
// //    console.log(str);
// //    for (var j = 1; j < 4; j++) {
// //        str += '!'
// //        console.log(str);
// //    }
// // }

// console.log("--------------------------------")

// let  num1=1;  num2=900;

// for (let i = 0; i <= 2; i++) {
//     num1=num1+1; //num1++;
//     console.log(num1);
//     for( let j = 0; j <= 2; j++){
//         num2++
//         console.log (num2)
       
//     }
//     }

//     console.log("--------------------------------")

//      let star2 = "*" ;
//    let star1 = "*****";
//     let result = star1 - star2
// for (let i = 5; i >= 0; i--) {
//      star1-star2
//    console.log(result)}


let result_star=``;
for( let i=5; i>=1; i--)
{
    
    for(let j=1; j<=i; j++)
    {
        result_star= result_star + `*`;  
    }
    console.log(result_star);
    result_star=``;
}



  