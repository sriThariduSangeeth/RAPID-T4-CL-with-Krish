const { quickSort } = require("../common/quick.sort");

function queationTree(req) {
    return new Promise((resolve, reject) => {
        if (req.body.array) {
            try {
                resolve(mixNumberSequence(req.body.array));
            } catch (e) {
                reject(e);
            }
        } else {
            reject("reqest body is not empty");
        }
    });
};

const numberSequence = (arr) => {

    let trueArryLength = arr.length + 1;
    arr.sort();
    var sumOfAll = (trueArryLength * (trueArryLength + 1)) / 2;
    var sumOfArray = 0;
    for (var i = 0; i <= trueArryLength - 2; i++) {
        sumOfArray = sumOfArray + arr[i];
    }
    return sumOfAll - sumOfArray;
}

const mixNumberSequence = (arr) => {

    const trueArryLength = arr.length + 1;
    const sortedArr = quickSort(arr);
    let mid = findMiddleNumber(sortedArr);
    return 0;

}

const findMiddleNumber = (arr) => {
    for (var i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}

module.exports = { queationTree };