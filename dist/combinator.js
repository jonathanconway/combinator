"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.combinate = void 0;
function combinateArray(list, n = 0, result = [], current = []) {
    if (n === list.length) {
        result.push(current);
    }
    else {
        list[n].forEach((item) => combinateArray(list, n + 1, result, [...current, item]));
    }
    return result;
}
/**
 * Generate multiple combinations of T, based on a definition of what combinations of T should be generated.
 * @param definition Object which, for each property of T, provides an array of possible values of that property.
 * @returns Array of instances of T, for each possible combination of properties of T, as defined by 'definition.
 * @example
 * // Returns:
 * // [
 * //   { color: 'r', brightness: 100 },
 * //   { color: 'r', brightness: 200 },
 * //   { color: 'r', brightness: 300 },
 * //   { color: 'g', brightness: 100 },
 * //   { color: 'g', brightness: 200 },
 * //   { color: 'g', brightness: 300 },
 * //   { color: 'b', brightness: 100 },
 * //   { color: 'b', brightness: 200 },
 * //   { color: 'b', brightness: 300 }
 * // ]
 * combinate({
 *   color: ["r", "g", "b"],
 *   brightness: [100, 200, 300],
 * });
 */
function combinate(definition) {
    const values = Object.values(definition);
    const keys = Object.keys(definition);
    const combinationArray = combinateArray(values);
    const combinationObjects = [];
    for (const combination of combinationArray) {
        combinationObjects.push(Object.fromEntries(combination.map((val, index) => [keys[index], val])));
    }
    return combinationObjects;
}
exports.combinate = combinate;
/**
  Utility which generates the set of numbers between `from` and `to`.
  @param from Start of the range. E.g. `2`
  @param to End of the range. E.g. `4`
  @returns Array of numbers covered by the range. E.g. `[2, 3, 4]`
  @example
  // Returns [2, 3, 4]
  range(2, 4);
*/
function range(from, to) {
    const values = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
exports.range = range;
