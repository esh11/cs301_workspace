//q1
const prompt = require ('prompt-sync')();

let number =  +prompt('Enter the number that you want to check:');
if(number==0 || number==1||number==2){
    console.log (` ${number} is Not a prime number !`);
}
for(let i = 2; i < number;i++){
    if(number%i==0){
        console.log(` ${number} is a prime number ! `);
        break;
    }
   
}console.log (` ${number} is Not a prime number !`);

//q2.
let num2= +prompt('Enter the number that you want to factorial:');
let fac = 1;
for(let i = num2; i >1;i--){
    fac= fac*i;

}console.log(fac);  

const pin  = '564abc';
let i = 1;
let message = '';
while( i <= 3){
    let test = prompt("Enter the pin please:");
    if(test===pin){
        message='Correct , welcome back.';
        break;
    }else {
        console.log('Incorrect try again ');
    }
   i++;
   message = 'Sorry but you have been locked out.'
}

console.log(message);

//q4

let number1 = 0;
let number2 = 1;
let sum ;
let number3 = +prompt('Enter the number :');

for(let i = 0; i< number3;i++){
    sum = number1 + number2;
    number1=number2;
    number2=sum;
}console.log(number2);

//Q5.

let integerNumber = prompt('Enter the number :');
let sum = 0;
for(let i = 0; i < integerNumber.length;i++){
    sum = sum + Number(integerNumber[i]);

}
console.log(sum);

//q6.
for(let i = 1; i<=5; i++){
    let row= "";
   for(let j=1; j<=i; j++){   
      row += i;  
}
console.log(row); 
} 
//b.

for(let i = 1; i<=5; i++){
    let row= "";
   for(let j=1; j<=i; j++){   
      row += j;  
}
console.log(row); 
} 
//c.

for(let i = 5; i>=1; i--){
    let row= "";
   for(let j=1; j<=i; j++){   
      row += i;  
}
console.log(row); 
}

