const { json } = require("express");

const singleNumberReverse = (number) => {
    return new Promise((resolve, reject) => {
        if (number) {
            resolve(forReverseSingleNumber(number));
        } else {
            reject("This is not a number");
        }
    });
};

const arrayNumberReverse = (arr) => {
    return new Promise((resolve, reject) => {
        if (checkNumberArray(arr)) {
            resolve(forReverseArrayNumbers(arr));
        } else {
            reject("This is not a number array");
        }
    });
};


const forReverseArrayNumbers = (numberList) => {
    let resMap = {};
    numberList.forEach(number => {
        resMap[number] = reverse(number)
    });
    return resMap;
};

const forReverseSingleNumber = (number) => {
    let res = {};
    res[number] = reverse(number);
    return res;
};

const reverse = (num) => {
    var rNum = 0;
    while (num) {
        rNum = (rNum * 10) + (num % 10);
        num = num / 10 | 0;
    }
    return rNum;
}

const checkNumberArray = (arr) => {
    let res = true;
    arr.forEach(e => {
        if (typeof e != 'number') {
            res = false;
        }
    });
    return res;
};

module.exports = { singleNumberReverse, arrayNumberReverse };