const { quickSort } = require("../common/quick.sort");
const { ResponseOne } = require("../common/response");

function queationOne(req) {
    return new Promise((resolve, reject) => {

        if (req.body.array) {
            try {
                resolve(findBiggestNum(req.body.array));
            } catch (e) {
                reject(e);
            }

        } else {
            reject("reqest body is not empty");
        }
    });
};

/**
 * First sort this array using Quick sort and find 3rd biggest number
 * @param  int array
 * @returns ResponseOne Object
 */
const findBiggestNum = (arr) => {
    const sortarr = quickSort(arr);
    let response = new ResponseOne(sortarr, sortarr[sortarr.length - 3]);
    return response;
}

module.exports = { queationOne };