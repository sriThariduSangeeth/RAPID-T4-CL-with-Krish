function queationFour(req) {
    return new Promise((resolve, reject) => {
        if (req.body) {
            try {
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
    if (reverseString == val2.toLowerCase()) {
        return "True... Yes These two words are anagram";
    } else {
        return "False... No These two words are not anagram";
    }
}

const reversArry = (arr) => {
    var ret = new Array;
    var res = "";
    const stringArr = Array.from(arr.replace(/ /g, ''));

    // to reverse string array
    for (var i = stringArr.length - 1; i >= 0; i--) {
        ret.push(stringArr[i]);
        res += stringArr[i] + "";
    }
    console.log(res);
    return res;
}

module.exports = { queationFour };