const quickSort = require("./sort/quick.sort");
const Response = require("./output/response");

/**
 * First sort this array using Quick sort and find 3rd biggest number
 * @param  int array
 * @returns ResponseOne Object
 */
const findBiggestNum = (arr) => {
    //To find biggest number first need to sort array
    // this will return accending order array so last number will be biggest number
    const sortarr = quickSort(arr.array);
    // to find third biggest number from last element
    let response = new Response(sortarr, sortarr[sortarr.length - 3]);
    return response;
}

module.exports = { findBiggestNum };