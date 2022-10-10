"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysInMonth = void 0;
function getDaysInMonth(month, year) {
    switch (month) {
        case "april":
        case "june":
        case "september":
        case "november":
            return 30;
        case "february":
            const isLeapYear = year % 4 === 0;
            if (isLeapYear) {
                return 29;
            }
            else {
                return 28;
            }
        default:
            return 31;
    }
}
exports.getDaysInMonth = getDaysInMonth;
