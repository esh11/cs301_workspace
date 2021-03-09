"use strict";
let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

/**
 * 
 * @param {object} obj as parameter
 * @returns {number} number of the properties 
 */
function countProperties(obj){
    let numberOfProperties = 0;
    for(let key in obj){
        numberOfProperties++;
    }
    return numberOfProperties;
}

/**
 * 
 * @param {String} str input
 * @returns{boolean}return true if it contain 
 */
function checkSpam(str){
  return str.includes("lottery" || "prize");
}

/**
 * 
 * @param {String} str1 input
 * @param {String} str2 inpput
 * @returns {boolean} true if they have the same end suffix
 */
function suffix(str1,str2){
    return str1.endsWith("ing") === str2.endsWith("ing");
}

/**
 * 
 * @param {string} sss  input string
 * @returns {String} return string 
 */
function titleCase(sss){
    let copyOfS= sss.charAt(0).toUpperCase();
    copyOfS= copyOfS + sss.substr(1,sss.lenth);
// copyOfS = copyOfS + str.slice(1);
    return copyOfS;
}

/**
 * 
 * @param {number} xxx parameter
 * @param {number} yyy parameter
 * @returns{array} nnn array returen
 */
function swap(xxx,yyy){
    let nnn = [yyy ,xxx];
    return nnn;
}

/**
 * 
 * @param {array} users of object array
 * @returns{number} return the average age
 */
function getAverageAge(users){
   let sum = 0;
   console.log(users.length);
    for(let i =0 ;i < users.length; i++){
        sum += users[i].age;

    }
    
    let average = sum/users.length;
    return average;

}
module.exports = {countProperties,checkSpam,suffix,titleCase,getAverageAge};

