//q.1
const prompt = require("prompt-sync")();

let weather = prompt('Type the weather please: ');
let footwear = "";
if(weather=='hot'){
    footwear = 'sandals';
}else if(weather== 'rain'){
    footwear = 'galoshes'
}else if(weather == 'snow'){
    footwear = 'boots';
}
console.log(`The correct footwear of the weather is : ${footwear}`); 

//q2
let name= prompt('Please enter your name: ');
let credit = +prompt('please enter the credit taken: ');
let label = '';

if (credit < 30 ){
    label = 'Freshman';

}else if(credit < 60){
    label= 'Sophomore';
}else if(credit < 90){
    label = 'Junior';
}else if (credit > 90){
    label='Senior';
}
console.log(name + ' is a ' + label);

//q3
let costOfHouse = +prompt('Please enter the cost of the house : ');
let downPayment = 0;

if(costOfHouse < 50,000){
    downPayment = costOfHouse * .05;
}else if(costOfHouse < 1000000){
    downPayment = 1000 + (0.10 *(costOfHouse -50000));
}else if(costOfHouse< 200000){
    downPayment = 2000 + (0.15*(costOfHouse - 100000));
}else if(costOfHouse > 200000){
    downPayment = 5000 + (0.10*(costOfHouse - 200000));
}
console.log(`The downpayment of a home is : ${downPayment}`);


//q4.
let status = prompt('please enter the status of a person: ');
let overDueBook = +prompt('enter number of books overdue: ');
let loanDuration = 0;

if(status == 'student'){
    if(overDueBook == 0){
        loanDuration = 6;
    }else if(overDueBook < 3){
        loanDuration=4;
    }else if(overDueBook >= 3){
        loanDuration=2;
    }

}else if (status == 'faculity'){
    if(overDueBook == 0){
        loanDuration = 12;
    }else if(overDueBook < 3){
        loanDuration = 10;
    }else if(overDueBook >= 3){
        loanDuration = 8;
    }
}else if (status == 'other'){
    if(overDueBook == 0){
        loanDuration = 4;
    }else if(overDueBook < 3){
        loanDuration = 3;
    }else if(overDueBook >= 3){
        loanDuration = 2;
    }
}
console.log(loanDuration + ' weeks duration ');

//q5.
let age = +prompt('please enter the age of the child: ');
let season = prompt('please enter the season : ');
let bedTime = '';

if(age <= 5){
    if(season==='summer'|| season==='fall'){
        bedTime = '8:30 PM';
    }else if(season==='winter'|| season ==='spring'){
        bedTime = '8:00 PM';
    }
}else if(age <= 12){
    if(season==='summer'){
        bedTime='9:30 PM'
    }else if(season === 'winter' || season==='spring'||season==='fall'){
        bedTime = '8:30 PM';
    }
}else if(age >= 13){
    if(season==='summer'){
        bedTime='10:30 PM'
    }else if(season === 'winter' || season==='spring'||season==='fall'){
        bedTime = '9:30 PM';}
}
console.log(`${age} year old child should go to bed at ${bedTime}`);

/*
reading qustion 
The code out put will be after the case statement is true and doesnt out from the code and execute the next code .
0
1
default    */