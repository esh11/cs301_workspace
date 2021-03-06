"use strict";
/**
 * 
 * @param {number} op1 input number
 * @param {number} op2 input number
 * @returns{number} return the addition of to numbers
 */
function add(op1, op2) {
    return op1 + op2;
    
}
/**
 * 
 * @param {number} op1 first operand
 * @param {number} op2 second operand
 * @returns{number} return addition 
 */
 function sub(op1, op2) {
 return op1 - op2;
}

/**
 * 
 * @param {number} op1 first operend
 * @param {number} op2 first operend
 * @returns{number} division
 */
function div(op1, op2) {
    return op1/op2;
} 

module.exports = {add, sub, div};