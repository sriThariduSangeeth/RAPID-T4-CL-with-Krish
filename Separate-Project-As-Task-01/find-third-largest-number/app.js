const Request = require("./input/request");
const { findBiggestNum } = require("./thirdlargest.number");

//Random number array
let array = [23, 51, 61, 72, 81, 102, 117, 111, 116, 80, 85, 24, 45];
//create new request obj
const reqArray = new Request(array);

const res = findBiggestNum(reqArray);
console.log(res);