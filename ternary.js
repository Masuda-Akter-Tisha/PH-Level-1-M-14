const age = 17;
// //simple if else
// if(age >=20){
//     console.log('you can vote')
// }
// else{
//     console.log('you should go to home and sleep')
// }
//normal ternary
age >= 18 ?console.log('You can vote'):console.log('you can not vote');


// let price = 500;
// const isLeader = false;
// if(isLeader === true){
//     price = 0;
// }
// else{
//     price += 100;
// }
// console.log(price);

// isLeader === true?console.log(price = 0):console.log(price += 50);
// price = isLeader === true? 0 : price + 100;
// console.log(price);
let price = 100;
const isLeader = true;
// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }
// console.log(price);

price = isLeader === true?price > 1000?price / 2:0:price + 1000;
console.log(price);