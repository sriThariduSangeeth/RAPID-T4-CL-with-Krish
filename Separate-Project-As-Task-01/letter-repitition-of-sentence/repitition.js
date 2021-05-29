const Response = require("./output/response");
/**
 * count duplicates letter in given sentence
 * @param {sentence} word 
 * @returns ResponseTwo Obj
 */
const findRepetition = (input) => {

    let word = input.input;
    //remove spaces and inster into string array and sort
    const stringArr = Array.from(word.replace(/ /g, '')).sort();
    //here every and each letter convert to Upper Case
    const summerArr = Array.from(word.replace(/ /g, '').toUpperCase()).sort();

    //difine map 
    var count = {};
    var summer = {};

    // insert into map
    stringArr.forEach(i => count[i] = (count[i] || 0) + 1);
    summerArr.forEach(i => summer[i] = (summer[i] || 0) + 1);

    return new Response(stringArr, count, summer);
};

module.exports = { findRepetition };