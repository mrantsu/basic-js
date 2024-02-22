const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = ' ') {
    this.direction = Boolean(direction);
    this.alphabet = {
      'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4,
      'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
      'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14,
      'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19,
      'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
      'Z': 25,
    }
  }

  encrypt(message, key) {
    if ((message === undefined || message.length === 0) || (key === undefined || key.length === 0)) {
      throw new Error('Incorrect arguments!');
    } else {
      let length = 0;
      let messageArr = message.toUpperCase().split('');
      let messageArrNumb = messageArr.map(item => {
        if (this.alphabet[item] || this.alphabet[item] === 0) {
          length++;
          return this.alphabet[item];
        } else {
          return item;
        }
      });
      let keyArr = this.repeatKey(key, length);
      let keyArrNumb = keyArr.map(item => this.alphabet[item]);
      let resultArrNumb = [];
      for (let i = 0, j = 0; i < messageArrNumb.length; i++) {
        if (typeof messageArrNumb[i] === 'number') {
          let sum = messageArrNumb[i] + keyArrNumb[j];
          j++;
          if (sum >= 26) {
            resultArrNumb.push(sum - 26);
          } else {
            resultArrNumb.push(sum);
          }
        } else {
          resultArrNumb.push(messageArrNumb[i]);
        }
      }
      let result = resultArrNumb.map(item => {
        if (typeof item === 'number') {
          for (let key in this.alphabet) {
            if (this.alphabet.hasOwnProperty(key)) {
              if (this.alphabet[key] === item) {
                return key;
              }
            }
          }
        } else {
          return item;
        }

      }).join('');
      return (this.direction) ? result : result.split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    if ((message === undefined || message.length === 0) || (key === undefined || key.length === 0)) {
      throw new Error('Incorrect arguments!');
    } else {
      let length = 0;
      let messageArr = message.toUpperCase().split('');
      let messageArrNumb = messageArr.map(item => {
        if (this.alphabet[item] || this.alphabet[item] === 0) {
          length++;
          return this.alphabet[item];
        } else {
          return item;
        }
      });
      let keyArr = this.repeatKey(key, length);
      let keyArrNumb = keyArr.map(item => this.alphabet[item]);
      let resultArrNumb = [];
      for (let i = 0, j = 0; i < messageArrNumb.length; i++) {
        if (typeof messageArrNumb[i] === 'number') {
          let substr = messageArrNumb[i] - keyArrNumb[j];
          j++;
          if (substr < 0) {
            resultArrNumb.push(26 + substr);
          } else {
            resultArrNumb.push(substr);
          }
        } else {
          resultArrNumb.push(messageArrNumb[i]);
        }
      }
      let result = resultArrNumb.map(item => {
        if (typeof item === 'number') {
          for (let key in this.alphabet) {
            if (this.alphabet.hasOwnProperty(key)) {
              if (this.alphabet[key] === item) {
                return key;
              }
            }
          }
        } else {
          return item;
        }

      }).join('');
      return (this.direction) ? result : result.split('').reverse().join('');
    }
  }

  // helper functions
  repeatKey(key, length) {
    let repeatNumb = Math.ceil(length / key.length);
    return key.toUpperCase().repeat(repeatNumb).split('').filter(item => item !== ' ').slice(0, length);
  }
}

module.exports = {
  VigenereCipheringMachine
};
