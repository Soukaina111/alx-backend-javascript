/**
 * Checks if all the values in the given array are present in the provided set.
 *
 * @param {Set} set - The set of values to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if all values in the array are present in the set, false otherwise.
 */
const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

export default hasValuesFromArray;
