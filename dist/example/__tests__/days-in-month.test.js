"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const days_in_month_1 = require("../days-in-month");
describe("getDaysInMonth", () => {
    const thirtyDays = (0, __1.combinate)({
        year: (0, __1.range)(2020, 2023),
        month: ["april", "june", "september", "november"],
        expectedDays: [30],
    });
    const thirtyOneDays = (0, __1.combinate)({
        year: (0, __1.range)(2020, 2023),
        month: ["january", "march", "may", "july", "august", "october", "december"],
        expectedDays: [31],
    });
    const twentyEightDays = (0, __1.combinate)({
        year: [2023],
        month: ["february"],
        expectedDays: [28],
    });
    const twentyNineDays = (0, __1.combinate)({
        year: [2024],
        month: ["february"],
        expectedDays: [29],
    });
    it.each([
        ...thirtyDays,
        ...thirtyOneDays,
        ...twentyEightDays,
        ...twentyNineDays,
    ])("$month in $year should have $expectedDays days", ({ month, year, expectedDays }) => {
        expect((0, days_in_month_1.getDaysInMonth)(month, year)).toBe(expectedDays);
    });
    test("abc", () => {
        console.log((0, __1.combinate)({
            color: ["r", "g", "b"],
            brightness: [100, 200, 300],
        }));
        expect(true).toBeTruthy();
    });
});
