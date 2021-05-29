const { findAnagram } = require("./anagram");
const Request = require("./input/request.obj");

let inputOne = "Stressed";
let inputTwo = "Desserts";
const input = new Request(inputOne, inputTwo);
const res = findAnagram(input);