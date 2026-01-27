const salary = 25000;
const isBcs = true;
const height = 60;

//In case of multiple conditions
// you must fill all conditions if you use &&
//you just fill any one conditions if you use ||

if(salary > 20000 || isBcs || height > 61){
    console.log('You can marry him');
}
else{
    console.log('You can not marry him');
}


//complex conditions

let apple = 300;
let discountCard = false;
let borrowCard = false;
let orange = 400;

if((apple <= 300  || discountCard == true) && borrowCard == true){
     console.log('You can buy apple')
}
else{
    console.log('You can not buy apple')
}