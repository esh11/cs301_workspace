"use strict";
/**
 * 
 * @param {number} num1 input parameter
 * @param {number} num2 input parameter
 * @returns {number} the result of the input
 */
function power(num1,num2){
    if(num2 ==0){
        return 1;
    }else return num1 * power(num1, num2-1);

}
/**
 * 
 * @param {number} num4 parameter
 * @returns {number} count of digits
 */
function countDigits(num4){
    if(num4 == 1){
        return 1;
    }else return 1 + countDigits(Math.floor(num4/10));

}
/**
 * 
 * @param {string} str input string 
 * @returns {string} return the reversed str
 */
function reverse(str){
    let stri = "";
    if(str == ""){
        return stri;
    }else return stri + str.charAt(str.length-1) + reverse(str.substring(0, str.length-1));
}

module.exports = {power,countDigits,reverse};