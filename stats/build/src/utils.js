"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    var day = dateParts[0];
    var month = dateParts[1] - 1; // month is zero indexed
    var year = dateParts[2];
    return new Date(year, month, day);
};
