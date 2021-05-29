class Response {
    sortedArray = [];
    duplicateReport = {};
    minimumReport = {};

    constructor(arr, report, minRepot) {
        this.sortedArray = arr;
        this.duplicateReport = report;
        this.minimumReport = minRepot;
    }
}

module.exports = Response;