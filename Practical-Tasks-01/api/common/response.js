class ResponseOne {
    sortedArray = [];
    thirdLargNumber;

    constructor(arr, num) {
        this.sortedArray = arr;
        this.thirdLargNumber = num;
    }
}

class ResponseTwo {
    sortedArray = [];
    duplicateReport = {};
    minimumReport = {};

    constructor(arr, report, minRepot) {
        this.sortedArray = arr;
        this.duplicateReport = report;
        this.minimumReport = minRepot;
    }
}

class ResponseThree {

    sortedArray = [];
    missingNumber = {};

    constructor(arr, num) {
        this.sortedArray = arr;
        this.missingNumber = num;
    }
}

class ResponseFour {

    anagram;
    description;

    constructor(val1, val2) {
        this.anagram = val1;
        this.description = val2;
    }
}

module.exports = { ResponseOne, ResponseTwo, ResponseThree, ResponseFour };