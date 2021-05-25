//first method for sort using merge algorithm

function mergeSortOne(array) {
    //Array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;

    //Break down the array to half from middle into left and right
    let middle = Math.floor(array.length / 2);
    let left = mergeSortOne(array.slice(0, middle));
    let right = mergeSortOne(array.slice(middle));

    //Return the merged sorted array
    return merger(left, right);
}

//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2) {
    let i = 0
    let j = 0
    let mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
        else mergedArr.push(arr1[i++]);
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j++]);
    }
    return mergedArr;
}

//second method for sort using merge algorithm

function mergeSortTwo(arr) {
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSortTwo(arr.slice(0, mid));
    var subRight = mergeSortTwo(arr.slice(mid));
    return merge(subLeft, subRight);
}

function merge(a, b) {
    var result = [];
    while (a.length > 0 && b.length > 0)
        result.push(a[0] < b[0] ? a.shift() : b.shift());
    return result.concat(a.length ? a : b);
}

// Using Taditional array to swap
var intarrayone = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
console.log("This is Merge Sort :");
mergeSortOne(intarrayone);
console.log(intarrayone);

var intarraytwo = new Array(18, 101, 160, 169, 234, 259, 323, 372, 431, 500, 505, 538, 790, 826, 858);
mergeSortTwo(intarraytwo);
console.log(intarraytwo);