const Request = require("./input/request");
const { findRepetition } = require("./repitition");

let word = "These days I am studying";
// create new request obj
const reqword = new Request(word);
//pass request obj to findRepetition method and get response
const res = findRepetition(reqword);
console.log(res);