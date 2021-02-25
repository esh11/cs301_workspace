const prompt = require("prompt-sync")();
// Q1.
let quartes = prompt("what is the volume in quartes: ");
let liters = quartes*0.95;
console.log(`The value in litters is ${liters}`);
//Q2.
let km = prompt("what is the kilometer to conver to mile : ");
let mile = km * 0.62;
console.log(`converted value is ${mile} mile ` );

//Q3.
let totalBox = prompt("Total number of boxes : ");
let box = prompt("number of boxes in each stack : ");
let stack = Math.round(totalBox/box);
console.log(`Total number of stack is ${stack}`);

//Q4.
let begining = prompt("what is the begining mileage : ");
let end = prompt("what is the ending mileage : ");
let gallones = prompt("gallones of gas used : ");
let mileagePerGallone = (end - begining)/gallones;
console.log(`${mileagePerGallone} miles per gallon`);

//Q5.

let age = prompt("Please enter your age please : ");
let lowest = (220 - age)*.65;
let fastest = (220 - age)*.85;
console.log(`the slowest rate necessary to strength your heart is ${lowest}.`);
console.log(`the fastest rates necessary to strength your heart is ${fastest}.`);

