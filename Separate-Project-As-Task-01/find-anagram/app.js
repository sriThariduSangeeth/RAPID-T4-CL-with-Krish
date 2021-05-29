const { findAnagram } = require("./anagram");
const Request = require("./input/request.obj");

let inputOne = "Stressed";
let inputTwo = "Desserts";
//create Request object and pass
const input = new Request(inputOne, inputTwo);
// logic method
const res = findAnagram(input);
console.log(res);