"use strict";

//Qestion 1,
/** 
 * @author solomon atsbeha <satsbeha@miu.edu>
 * @param {array}arr is input array
 * @param { number} kkk is a positive test integer
 * @returns { number} number of pairs
**/
function divisibleSumPairs(arr, kkk){
    let count = 0;
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
            if(((arr[i]+arr[j])%kkk)==0){
                if(i < j)
                   count++;
            }
        }
    }
    return count;
}

//      Qestion 2
/**
 * 
 * @param {array} arr as par
 * @returns {number} out return number of items
 * @author Bisrat <btegegne@miu.edu>
 */
function mostFrequentSight(arr){
    let mfe = 1;//default maximum frequency
    let count = 0; //counter
    let item; //to store item with maximum frequency
    for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
    if(arr[i]== arr[j]) //see if element occurs again in the array
    count++; //increment counter if it does
    if(mfe < count){ //compare current items frequency with maximum frequency
    mfe = count; // if count>mf store m in mf for upcoming elements
    item = arr[i]; // store the current element.
    }
    }
    count=0; // make counter 0 for next element.
    }
    return item; 
    }
 
//  Question 5
/**
 * 
 * @param {Array} arr parameters as array
 * @returns {array} return array 
 * @author eshete 	<efente@miu.edu
 */
function computeCharges (arr){
    
    let max = 0;
    let avg = 0;
    let report = [];
    let i ;
    for(let j = 0 ;j < arr.length; j++){
        let sum = 0;
        for ( i = 0; i< arr[j].charges.length; i++){
            sum = sum + arr[j].charges[i];
            if(arr[j].charges[i] > max){
                max = arr[j].charges[i];
            }
        }
        console.log(sum);
        avg= sum/arr[j].charges.length;
        report.push({custId : arr[j].custId ,average : avg,maximum : max});
    }
return report;
}
//question 4
/**
 * 
 * @param {number} height of the tree
 * @param {number} cycles of seasons
 * @returns {number}height of the tree
 * @author eshete <efente@miu.edu>
 */
function computeHeight(height , cycles) {
    while (cycles >= 0){
      if(cycles % 2 !== 0 ){
        height *= 2;
      }else{
        height++;
      }
      cycles--;
    }
    
    return height;
  }
  /** 
  * @author solomon atsbeha satsbeha@miu.edu>
  * @param {array}arr is input array
  
  * @returns { number} number of pairs
 **/
 function countSocksPairs( arr) {
     let arr = [];
     let pairs = 0;
     
   for (let element of arr) {
     arr[element] = arr[element] + 1 || 1;
       if (arr[element] % 2 === 0) {
         pairs += 1;
       }
       
     }
     
    
   return pairs;
   }
  

module.exports= {divisibleSumPairs,computeCharges,computeHeight,mostFrequentSight,countSocksPairs};
