const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};
  const splitIntoPices = domains.map(item => item.split('.').reverse());
  for(let i = 0; i < splitIntoPices.length; i++) {
    while(splitIntoPices[i].length > 0) {
      const domain = `.${splitIntoPices[i].join('.')}`;
        if(resultObj[domain]) {
          resultObj[domain] += 1;
        } else {
          resultObj[domain] = 1;
        }
      splitIntoPices[i].pop();
    }
  }
  return resultObj;
}

module.exports = {
  getDNSStats
};
