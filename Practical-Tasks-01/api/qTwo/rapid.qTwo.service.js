const { ResponseTwo } = require("../common/response");

function queationTwo(req) {
    return new Promise((resolve, reject) => {
        if (req.body.word) {
            try {
                resolve(findRepetition(req.body.word));
            } catch (e) {
                reject(e);
            }
        } else {
            reject("reqest body is not empty");
        }
    });
};

/**
 * count duplicates letter in given sentence
 * @param {sentence} word 
 * @returns ResponseTwo Obj
 */
const findRepetition = (word) => {

    //remove spaces and inster into string array and sort
    const stringArr = Array.from(word.replace(/ /g, '')).sort();
    //here every and each letter convert to Upper Case
    const summerArr = Array.from(word.replace(/ /g, '').toUpperCase()).sort();

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

/**
 * to remove duplicate in array
 * - there are three methods to use
 * @param {sentence} word 
 */

const removeDuplicates = (word) => {

    // Step 1
    const uniqueSet = new Set(word);
    const backToArray = [...uniqueSet];

    // 2: "Filter"
    word.filter((item, index) => word.indexOf(item) === index);
    // 3: "Reduce"
    word.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]), [],
    );
};

module.exports = { queationTwo };