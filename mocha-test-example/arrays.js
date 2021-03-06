"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length!== arr2.length){
        return false;
    }
    for(let i =0;i < arr1.length; i++){
        if(arr1[i]!== arr2[i]){
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {array} arr type if parameter arrray
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr){
    let sum = arr[0] + arr[arr.length-1];
    console.log(sum);
    return sum;
}

/**
 * 
 * @param {array} arr4 array as parameter
 * @returns{number} middle value
 */
function getMiddle(arr4){
    if(arr4.length%2 === 0){
        return (arr4[arr4.length/2] + arr4[(arr4.length/2) -1])/2;
    } else{
        return (arr4[Math.floor(arr4.length/2) ]);
    }
}
/**
 * 
 * @param {array} arr5 parameter
 * @returns {array} arr5 return array
 */
function rotateLeft(arr5){
    let element = arr5.shift();
    arr5.push(element);
    return arr5;
}
/**
 * 
 * @param {array} arr6 array to rotate to right
 * @return{array} return rotated array
 */
function rotateRight(arr6){
    let elem = arr6.pop();
    arr6.unshift(elem);
    return arr6;

}
/**
 * 
 * @param {array} arr7 to be rotate 
 * @param {number} num number of times to rotate 
 * @returns{array} return the rotated array
 */
function rotateNRight(arr7, num){
    for(let i = 0 ; i< num; i++){
        let elemen = arr7.pop();
        arr7.unshift(elemen);
        
    }
    return arr7;

}
/**
 * 
 * @param {number} abc input to compare
 * @param {number} cde input to compare
 * @returns{number} return 0,-1 or 1 
 */
//function comparator(abc, cde){
//  return abc - cde;
//}
/**
 * 
 * @param {array} arr8 input array
 * @param {array} arr9 input array
 * @returns{array}sorted array
 */
function arrayMerge(arr8 ,arr9){
    for(let i = 0; i < arr9.length;i++){
        let num3 = arr9.shift();
        arr8.push(num3);
    }
    arr8.sort((abc, cde) => abc - cde);
    return arr8;
}
/**
 * 
 * @param {array} arr9 array to be reversed
 * @returns{array} return reversed array as string join with "_"
 */
function reverse2String(arr9){
    arr9.reverse();
    return arr9.join("_");

}
/**
 * 
 * @param {array} arr11 input array
 * @param {number} num10 number to check
 * @returns{array} arr12 return array;
 */
function enhancedIncludes(arr11, num10){
    let arr12 = [];
    for(let i = 0; i < arr11.length;i++){
        let count = 0;
        if(arr11[i]== num10){
            count = count + 1;
            if(count == 1){
                arr12.push(true);
                arr12.push(i);
            }else if(count == 2){
                arr11.push(i);
            }else{
                arr12.pop();
                arr12.push(i);

            }
        }
        return arr12;

    }
   return arr12;
}


module.exports= {isArrayEqual, addend, getMiddle,rotateLeft,rotateRight,rotateNRight,arrayMerge,reverse2String,enhancedIncludes};