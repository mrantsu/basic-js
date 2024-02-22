const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = '';
  let counter = 1;
  for (let i = 0; i < str.length; i += 1) {
    const currentChar = str[i];
    if (currentChar === str[i + 1]) {
      counter += 1;
    } else {
      resultString += (counter > 1 ? counter : '') + currentChar;
      counter = 1;
    }
  }

  return resultString;
}

module.exports = {
  encodeLine
};
