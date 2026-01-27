var age = 20;
const price = 500;
if(age <= 12){
    console.log('you can eat for free');
}
else if(age >= 60){
    //10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 18){
    //5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}