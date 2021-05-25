function bubbleSort(array) {

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

var intarray = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
bubbleSort(intarray);
console.log(intarray);