const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resultArr: [],

  getLength() {
    return this.resultArr.length;
  },
  addLink(value = '') {
    this.resultArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.resultArr.length || position < 1 || typeof position !== 'number') {
      this.resultArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.resultArr[position - 1] = null;
    this.resultArr = this.resultArr.filter((item) => item !== null);
    return this;
  },
  reverseChain() {
    this.resultArr = this.resultArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.resultArr.join("~~");
    this.resultArr = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
