// let age = 13;
// if(age >= 10){
//     console.log("welcome! you can come to mela");
// }
// else{
//     console.log("sorry,you can not come to mela");
// }

let bookPrice = 100;
if(bookPrice <= 50){
    console.log("you can buy the book.")
}
else if(bookPrice == 100){
    console.log("you can borrow this book for a day.");
}
else{
    console.log("you should go to your home");
}

let age = 20;
let withAdult = true;
if(age >= 10){
    console.log("you can go to ghost home");
    if(withAdult){
        console.log("you can go to ghost home with discount");
    }
    else{
        console.log("you can ride anything")
    }
}
else{
    console.log("you can not go to ghost home");
}