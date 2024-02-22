const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if (Array.isArray(arr) === false) {
      return 0;
    }
    arr.forEach((i) => {
      counter = Math.max(this.calculateDepth(i) + 1, counter);
    });
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
