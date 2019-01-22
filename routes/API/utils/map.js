/**
 * Recursively Map and Array for efficiency and the hell of it.
 * Example usage: 
 * const double = x => x * 2
 * map([1,2,3], double) // [2,4,6]
 * SOURCE: 
 * https://medium.com/dailyjs
 * /functional-js-with-es6-recursive-patterns-b7d0813ef9e3
 * @param {Array} Array to be mapped
 */
// Deconstructs array, recursively loops through,
// calling the 'fn' function on each. 
const mapRec = ([i, ...t], fn) => i ? [fn(i), ...mapRec(t, fn)] : [];
export default mapRec;
// /* Example Usage: */
// const logExample = mapRec([1,2,3], (head) => console.log(head));