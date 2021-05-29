const Response = require("./output/response");
/**
 * count duplicates letter in given sentence
 * @param {sentence} word 
 * @returns ResponseTwo Obj
 */
const findRepetition = (input) => {

    let word = input.input;
    //remove spaces and inster into string array
    const stringArr = Array.from(word.replace(/ /g, ''));
    //here every and each letter convert to Upper Case
    const summerArr = Array.from(word.replace(/ /g, '').toUpperCase());

    //difine map 
    var mapAllRepition = new Map();
    var mapSummary = new Map();

    // insert into map

    for (let i = 0; i < stringArr.length; i++) {
        mapAllRepition.set(stringArr[i], (mapAllRepition.get(stringArr[i]) || 0) + 1);
        mapSummary.set(summerArr[i], (mapAllRepition.get(summerArr[i]) || 0) + 1);
    }

    return new Response(stringArr, mapAllRepition, mapSummary);
};

module.exports = { findRepetition };