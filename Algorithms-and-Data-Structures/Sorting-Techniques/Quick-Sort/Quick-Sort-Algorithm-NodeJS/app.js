//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
        //Move all the small elements on the left side
        if (arr[i] < arr[left]) swap(arr, i, ++shift);
    }

    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
}

function quickSortOne(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);

        //Recusrively calling the function to the left of the pivot and to the right of the pivot
        quickSortOne(array, left, pivotIndex - 1);
        quickSortOne(array, pivotIndex + 1, right);
    }
    return array;
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

// Using Taditional array to swap
var intarrayone = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
quickSortOne(intarrayone);
console.log(intarrayone);

// Using ES6 array destructuring to swap
var intarraytwo = new Array(18, 101, 160, 169, 234, 259, 323, 372, 431, 500, 505, 538, 790, 826, 858);
quickSortTwo(intarraytwo);
console.log(intarraytwo);