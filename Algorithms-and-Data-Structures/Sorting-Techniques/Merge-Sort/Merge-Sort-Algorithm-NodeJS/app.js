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

function mergeSort(array) {
    //Array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;

    //Break down the array to half from middle into left and right
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    //Return the merged sorted array
    return merger(left, right);
}


// Using Taditional array to swap
var intarrayone = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
console.log("This is Merge Sort :");
mergeSort(intarrayone);
console.log(intarrayone);