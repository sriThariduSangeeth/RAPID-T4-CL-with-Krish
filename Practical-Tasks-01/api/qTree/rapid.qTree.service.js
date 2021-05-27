function queationTree(req) {
    return new Promise((resolve, reject) => {
        if (req.body.array) {
            try {
                resolve(numberSequence(req.body.array));
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
    var missingNumber = sumOfAll - sumOfArray;
    return missingNumber;
}

module.exports = { queationTree };