function bubbleSortOne(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            // -i because the largest element will be bubbled at the end so we don't have to compare.
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array);
            }
        }
    }
    return array;
}

function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function bubbleSortTwo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Using Taditional array to swap
var intarrayone = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
bubbleSortOne(intarrayone);
console.log(intarrayone);

// Using ES6 array destructuring to swap
var intarraytwo = new Array(18, 101, 160, 169, 234, 259, 323, 372, 431, 500, 505, 538, 790, 826, 858);
bubbleSortTwo(intarraytwo);
console.log(intarraytwo);