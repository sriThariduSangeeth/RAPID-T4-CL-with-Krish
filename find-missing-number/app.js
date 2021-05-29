const Request = require("./input/request");
const { mixNumberSequence } = require("./missing.number");


let array = [21, 20, 25, 22, 23, 28, 26, 27, 29];
const reqArray = new Request(array);
const res = mixNumberSequence(reqArray);