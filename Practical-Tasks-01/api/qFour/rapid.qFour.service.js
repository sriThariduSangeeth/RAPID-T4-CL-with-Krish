const { ResponseFour } = require("../common/response");

function queationFour(req) {
    return new Promise((resolve, reject) => {
        if (req.body) {
            try {
                // read both input
                let first = req.body.inputOne;
                let second = req.body.inputTwo;
                resolve(findAnagram(first, second));
            } catch (e) {
                reject(e);
            }
        } else {
            reject("reqest body is not empty");
        }
    });
};

const findAnagram = (val1, val2) => {
    const reverseString = reversArry(val1.toLowerCase());
    //chack both string are equal or not
    if (reverseString == val2.toLowerCase()) {
        return new ResponseFour(true, "Yes... These two words are anagram");
    } else {
        return new ResponseFour(false, "No... These two words are not anagram");
    }
}

const reversArry = (arr) => {
    var ret = new Array;
    var res = "";
    // remove space and insert into array
    const stringArr = Array.from(arr.replace(/ /g, ''));

    // to reverse string array
    for (var i = stringArr.length - 1; i >= 0; i--) {
        //create revers array
        ret.push(stringArr[i]);
        //concatenate string
        res += stringArr[i] + "";
    }
    return res;
}

module.exports = { queationFour };