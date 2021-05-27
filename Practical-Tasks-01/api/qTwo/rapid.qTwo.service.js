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

const findRepetition = (word) => {

    const stringArr = Array.from(word.replace(/ /g, ''));
    const summerArr = Array.from(word.replace(/ /g, '').toUpperCase()).sort();

    // sort string array
    stringArr.sort();
    var count = {};
    var summer = {};
    // insert into map
    stringArr.forEach(function(i) { count[i] = (count[i] || 0) + 1; });

    summerArr.forEach(function(i) { summer[i] = (summer[i] || 0) + 1; });
    return new ResponseTwo(stringArr, count, summer);
};



//to remove duplicate in array
//there are three methods to use

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