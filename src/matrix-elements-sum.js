const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc, item) => acc + item, 0);
  let temp = matrix[0];

  for(let i = 1; i < matrix.length; i += 1) {
    temp.forEach((item, index) => {
      if(item !== 0) {
        sum += matrix[i][index];
      }
    })
    temp = matrix[i]
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
