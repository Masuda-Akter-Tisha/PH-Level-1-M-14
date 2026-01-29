//1
// let burger = 600;
// if(burger > 500){
//     console.log('free coke');
// }
// else{
//     let coke = '30tk';
//     console.log(coke);
// }

//2
//let BMI = 50.40 / 1.65**2;
// let BMI =  35;
// if(BMI < 18.5){
//     console.log('You are underweight');
// }
// else if(BMI > 18.5 && BMI <= 24.9){
//     console.log('You are normal');
// }
// else{
//     if(BMI >= 25 && BMI <= 29.9){
//         console.log('You are overweight');
//     }
//     else{
//         console.log('You are obese');
//     }
// }

//3
// let score = 70;
// let friendScore = 30;
// if(score > 80){
//     if(friendScore > 80){
//         console.log('go for a lunch');
//     }
//     else if(friendScore < 80 && friendScore >= 60){
//         console.log('good luck,next time');
//     }
//     else if(friendScore < 60 && friendScore >= 40){
//     console.log('keep your friend message unseen');
// }
//     else{
//          console.log('Block');
//     }
// }
// else{
//     console.log('go to home and act sad');
// }

//4
 let num1 = 50;
 let num2 = 40;
// if(num1 > num2){
//     let result = num1*2;
//     console.log(result);
// }
// else{
//     let result = num1 + num2;
//     console.log(result);
// }
// result = num1 < num2? num1*2 :num1 + num2;
// console.log(result);

//5
let ticket = 800;
let age = 25;
if(age < 10){
    ticket = 0;
    console.log(ticket);
}
else if(age < 20){
    discount = ticket * 50 / 100;
    payAmount = ticket - discount;
     console.log(payAmount);
}
else if(age >= 60){
    discount = ticket * 15 / 100;
    payAmount = ticket - discount;
     console.log(payAmount);
}
else{
    ticket = 800;
     console.log(ticket);
}




