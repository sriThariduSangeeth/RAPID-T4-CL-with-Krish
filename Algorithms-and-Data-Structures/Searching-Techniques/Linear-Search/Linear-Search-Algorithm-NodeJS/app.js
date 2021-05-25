function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) { // Found it!
            return true;
        }
    }

    // Item not found in the array.
    return false;
}


// Using Taditional array to swap
var intarrayone = new Array(1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92);
if (linearSearch(intarrayone, 43)) {
    console.log("Found :" + 43);
} else {
    console.log("Not Found" + 43);
}