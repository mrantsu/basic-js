const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const {length: matrixRows} = matrix;
  const {length: matrixCols} = matrix[0];
  const resultMatrix = matrix.map(_ => []);

  for (let i = 0; i < matrixRows; i += 1) {
    for (let j = 0; j < matrixCols; j += 1) {
      let mineCounter = 0;

      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          const ri = i + x;
          const ci = j + y;

          if (ri >= 0 && ri < matrixRows && ci >= 0 && ci < matrixCols) {
            if (matrix[ri][ci]) {
              mineCounter += 1;
            }
          }
        }
      }

      if (matrix[i][j]) {
        mineCounter -= 1;
      }
      resultMatrix[i].push(mineCounter);
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
