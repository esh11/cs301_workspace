
const prompt = require ("prompt-sync")();

/* console.log("hello world");
console.log(Number(null));
console.log(Number (undefined));
console.log(Boolean("0"));
console.log(Boolean(" ")); 
let name = prompt("what is your name ");
console.log(`Hi ${name}`);


let year = prompt('In which year was ECMAScrpit 2015 specification public ');
if(year == 2015){
    alert('You guessed it right ');
} else {
    alert('How can you be so wrong');
}

let age = prompt('age?',18);
let message = (age < 3)? 'Hi baby':
(age < 18) ? 'Hello' :
(age < 100) ? 'Greating ' :
'what an unsual age';

alert(message);


// switch case Type matters it is ==== comparison 
let a = 4;
switch(a){
    case 3 :          //if (a === 3)
    alert('Too small');
    break;
    case 4:         // if (a === 4)
    alert ('Exactly');
    break;
    case 5:
        alert('Too big');
        break;
        default:
            alert('I dont know such value ');
}
let x = null;

console.log(typeof(x));  // object 
console.log(x++);
console.log(x++); 

let weather = prompt('Enter the weather today ');
if(weather==="rainy"){
    console.log('Get an umberella');
}

let num = +prompt('Enter the number :')
if(num===7){
    console.log("Bingo!");
}else {
    console.log('Try again');
}
let age = +prompt('Enter your age :');
if(age <=0){
    console.log('please enter valid age');
}else if(0<= age && age <= 14){
    console.log('you cant drive yet');
}else if(age>=15 && age <=18){
    console.log('you can drive under supervision');
} else {
    console.log('you can drive');
}*/

/* let num1 = +prompt('enter the number between 1 -5: ');
let message = '';
if (num1 ==1){
    message = 'one';
}else if(num1== 2){
    message = 'two';
}else if(num1==3){
    message = 'three';
}else if(num1 == 4){
    message = 'four';
}else if(num1==5){
    message = 'five';
}else{
    message = 'try again';
}
console.log(message); */

let num2 = +prompt('enter the number 1 - 5: ');
let message = "";
switch (num2) {
    case 1:
        message = 'one';
        break;
     case 2:
         message = 'two';
         break;   
    case 3:
        message = 'three';
        break;
    case 4:
        message = 'four';
        break;
    case 5:
        message = 'five';
        break;        
    default:
        break;
}
console.log(message);


