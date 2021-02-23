console.log("hello world");
console.log(Number(null));
console.log(Number (undefined));
console.log(Boolean("0"));
console.log(Boolean(" "));
const prompt = require ("prompt-sync")();
let name = prompt("what is your name ");
console.log(`Hi ${name}`);