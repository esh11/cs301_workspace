"use strict";
const prompt = require ("prompt-sync")();
//q1
/* 
let number =  +prompt("Enter the number that you want to check:");
console.log(isPrime(number) === "prime"); */
/**
 * 
 * @param {number} number to be checked.
 * @returns{Strilng} return prime or not prime.
 */
/*
function isPrime(number){
for(let i = 2; i < number;i++){
    if(number%i==0){
        return "prime";
    }
}
return "not prime";
}

//q2

let volume;
let area;
/**
 * 
 * @param {number} radius of the circule.
 * @returns{number} area of the circle.
 */
/* function areaOfCircle(radius){
    area = radius*radius* Math.PI;
    return area;
} */
/**
 * @param{number} radius of the circule.
 * @param {number} height of the cylinder.
 * @returns{number} volume of the cylindeer;
 */
/*
function volumeOfCylinder(radius , height){
    volume = areaOfCircle(radius)*height;
    return volume;
}

console.log(volumeOfCylinder(5,8));
*/
//q3
/**
 * 
 * @param {number} width of house volulme.
 * @param {number} depth of house voulume.
 * @param {number} height of housevolume
 * @param {number} sweep of the house volume
 * @returns{number} lvolume of the house volume.
 */
/* function houseVolume(width,depth,height,sweep){
    let hVolume= livingVolume(width,height,depth) + roofVolume(width,sweep);
    return hVolume;
} */
/**
 * 
 * @param {number} width of roof
 * @param {number} height of roof
 * @param {number} depth of roof 
 * @returns{number} rvolume of the living volume.
 */
/* function livingVolume(width,height,depth){
    let lVolume = width*height*depth;
    return lVolume;
} */
/**
 * 
 * @param {number} width of roof
 * @param {number} sweep of roof
 * @returns{number}volume of thr roof
 */
/* function roofVolume(width ,sweep){
    let rVolume = triagleArea(width,sweep) * width;
    return rVolume;
} */
/**
 * 
 * @param {number} width of the triangle 
 * @param {number} sweep of the triangle
 * @returns{number} area of the triangle
 */
/*
function triagleArea(width,sweep){
    let side  = (width+sweep+width)/2;
    let tArea=Math.sqrt(side*(side-width)*(side-sweep)*(side-sweep));
    return tArea;
} 

console.log(houseVolume(2,4,2,2)); */

// reading
 /*1. compare (==)to undifiend
      use || operator
      use ??  
    2.does the function name describe the function does
      brief and accurate 
      function name as verb if it change the state of the program 
      noune  if it return a certain value 
    


 */
/**
 * 
 * @param {number} num1 input number to test
 * @param {number} num2 input number
 * @returns{number} num1 return
 */
function hcf(num1, num2){
    let num3;
    while(num2 != 0){
        num3=num2;
        num2= num1%num2;
        num1 = num3;

    }
    return num1;
}
/**
 * 
 * @param {number} num1 input to find lcm
 * @param {number} num2 input to find lcm
 * @returns{number} return lcm.
 */
function lcm(num1, num2){
    let lcm = (num1*num2)/hcf(num1,num2);
    return lcm;

}
let num1= prompt("please enter the number to find hcf and lcm: ");
let num2= prompt("please enter the number to find hcf and lcm: ");
console.log(lcm(num1,num2));

/**
 * 
 * @param {number} add function
 * @param {number} input1 to be add
 * @param {number} input2 to be add
 * @returns{number} return the number 
 */
function compute(add,input1,input2){
    add(input1,input2);
}
/**
 * 
 * @param {number} input1 to be add
 * @param {number} input2 to be add
 * @returns {number}return number
 */
function add(input1,input2){
    return input1+input2;
}
console.log(compute(add,5,6));