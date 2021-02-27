const prompt = require ('prompt-sync')();
//q1

let number =  +prompt('Enter the number that you want to check:');
console.log(isPrime(number) == 'prime')
function isPrime(number){
if(number==0 || number==1||number==2){
    return 'npt prime';
}
for(let i = 2; i < number;i++){
    if(number%i==0){
        return 'prime';
        break;
    }
}
return 'not prime';
}

//q2

let radius;
let volume;
let height;
let area;

function areaOfCircle(radius){
    area = radius*radius* Math.PI;
    return area;
}

function volumeOfCylinder(radius , height){
    volume = areaOfCircle(radius)*height;
    return volume;
}

console.log(volumeOfCylinder(5,8));

//q3
function houseVolume(width,depth,height,sweep){
    let hVolume= livingVolume(width,height,depth) + roofVolume(width,sweep);
    return hVolume;

}
function livingVolume(width,height,depth){
    let lVolume = width*height*depth;
    return lVolume;
}
function roofVolume(width ,sweep){
    let rVolume = triagleArea(width,sweep) * width;
    return rVolume;

}
function triagleArea(width,sweep){
    let s = (width+sweep+width)/2;
    let tArea=Math.sqrt(s*(s-width)*(s-sweep)*(s-sweep));
    return tArea;
}

console.log(houseVolume(2,4,2,2));


// reading
/* 1. compare (==)to undifiend
      use || operator
      use ??  
    2.does the function name describe the function does
      brief and accurate 
      function name as verb if it change the state of the program 
      noune  if it return a certain value 
    */