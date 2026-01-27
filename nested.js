const money = 30;
const car = false;
if(money >= 500){
    console.log('You are rich');
}
else{
    if(money >= 600){
        console.log('You can buy biriyani');
    }
    else if(car == true){
        console.log('You are extreme boroloks,so you can buy anything')
    }
    else{
        if(money >= 50){
            console.log('You can buy only rice');
        }
        else{
            console.log('You will not buy anything beacuse you are fokir')
        }
    }
}