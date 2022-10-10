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
export declare function combinate<T>(definition: Definition<T>): T[];
/**
 * Definition of combinations of properties of T.
 * Each property is a property of T, and each value is an array of values of that property.
 */
export declare type Definition<T> = Record<keyof T, readonly T[keyof T][]>;
/**
  Utility which generates the set of numbers between `from` and `to`.
  @param from Start of the range. E.g. `2`
  @param to End of the range. E.g. `4`
  @returns Array of numbers covered by the range. E.g. `[2, 3, 4]`
  @example
  // Returns [2, 3, 4]
  range(2, 4);
*/
export declare function range(from: number, to: number): number[];
