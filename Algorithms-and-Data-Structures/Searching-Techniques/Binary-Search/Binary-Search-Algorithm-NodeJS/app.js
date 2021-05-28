function binarySearch(arr, item, low, high) {
    if (low > high) { // No more elements in the array.
        return null;
    }

    // Find the middle of the array.
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) { // Found the item!
        return mid;
    }

    if (item < arr[mid]) { // Item is in the half from low to mid-1.
        return binarySearch(arr, item, low, mid - 1);
    } else { // Item is in the half from mid+1 to high.
        return binarySearch(arr, item, mid + 1, high);
    }
}


function quickSortTwo(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];
        // Sort elements into three piles
        let lesser = [];
        let equal = [];
        let greater = [];
        for (let e of array) {
            if (e < pivotValue) {
                lesser.push(e);
            } else if (e > pivotValue) {
                greater.push(e);
            } else {
                equal.push(e);
            }
        }
        return [...quickSortTwo(lesser), ...equal, ...quickSortTwo(greater)];
    }
}


//Using Taditional array to search
// first need to sort this mix array

var numbers = [1, 4, 2, 8, 345, 123, 43, 32, 63, 123, 2, 55, 1, 234, 92];
const findNum = 133;
if (binarySearch(quickSortTwo(numbers), findNum, 0, numbers.length - 1) != null) {
    console.log("Found :" + findNum);
} else {
    console.log("Not Found :" + findNum);
}