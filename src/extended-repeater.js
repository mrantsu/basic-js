const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  }
) {

  if (repeatTimes === 0 && additionRepeatTimes === 1) {
    return `${String(str)}${addition}`
  }
  let resultString = '';
  let additionalString = `${String(addition)}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  for (let i = 0; i < repeatTimes; i+= 1) {
      resultString += `${String(str)}${additionalString}${separator}`;
  }

  return resultString.slice(0, -separator.length);
}

module.exports = {
  repeater
};
