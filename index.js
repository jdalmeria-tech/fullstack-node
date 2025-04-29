// const operations = require("./module.js");

// using destructuring
const {add, multiply} = require("./module.js");

function printMessage(message){
  console.log(message);
}

printMessage("Hello World!!");

console.log("Sum: ", add(3, 5));
console.log("Multiply: ", multiply(3, 5));
