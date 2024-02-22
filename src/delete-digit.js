const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitToArr = Array.from(n.toString(), Number);
  const possibleResultsArr = digitToArr.map((_, index) => {
    const copyArr = [...digitToArr];
    copyArr.splice(index, 1);
    return +copyArr.join('');
  })

  return Math.max(...possibleResultsArr);
}

module.exports = {
  deleteDigit
};
