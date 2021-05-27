const { quickSort } = require("../common/quick.sort");
const { ResponseThree } = require("../common/response");

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


/** 
 * if this Sequence number set start from 1 this method will vaild
 * (n*(n+1))/2 will give The sum of all the numbers in expected array
 */
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

/** 
 * This method can apply every number Sequence. it can be start form anywhere
 * if last number or first number missing this will predic both number
 * if middle number missing this will display only that number
 */
const mixNumberSequence = (arr) => {

    const trueArryLength = arr.length + 1;
    const sortedArr = quickSort(arr);
    let mid = findMiddleNumber(sortedArr);
    if (mid.length == 1) {
        return new ResponseThree(sortedArr, (arr[0] - 1) + " or " + mid[0]);
    } else {
        return new ResponseThree(sortedArr, mid[0]);
    }

}

const findMiddleNumber = (arr) => {
    let res = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            res.push(arr[i] + 1);
        }
    }
    return res;
}

module.exports = { queationTree };