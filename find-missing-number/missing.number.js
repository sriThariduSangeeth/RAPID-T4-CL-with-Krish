const Response = require("./output/response");
const quickSort = require("./sort/quick.sort");


/** 
 * This method can apply every number Sequence. it can be start form anywhere
 * if last number or first number missing this will predic both number
 * if middle number missing this will display only that number
 */
const mixNumberSequence = (arr) => {

    //this is length of existing array
    const trueArryLength = arr.array.length + 1;
    // if this is mixed element array first need to sorted
    const sortedArr = quickSort(arr.array);
    //check middle element missing or not
    let mid = findMiddleNumber(sortedArr);
    if (mid.length == 1) {
        //if not middle element missed it can be last or first element
        console.log(new Response(sortedArr, (arr.array[0] - 1) + " or " + mid[0]));
    } else {
        //if middle element missed
        console.log(new Response(sortedArr, mid[0]));
    }

}

// chacke whether middle element missing or not
const findMiddleNumber = (arr) => {
    let res = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            res.push(arr[i] + 1);
        }
    }
    return res;
}

module.exports = { mixNumberSequence };