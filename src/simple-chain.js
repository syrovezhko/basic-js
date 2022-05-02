const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.values.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let val = value;

    if (value === undefined) {
      val = '';
    }

    this.values.push(val);

    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position % 1 > 0 || position < 1 || position > this.values.length) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.values = this.values.filter( (item, i) => i != position - 1);

    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.values = this.values.reverse();

    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let chain = '';

    for (let i = 0; i < this.values.length; i++) {

      if (i === 0) {
        chain += `( ${this.values[i]} )`;
      } else {
        chain += `~~( ${this.values[i]} )`;
      }

    }

    this.values = [];
    
    return chain;
  }
  
};

module.exports = {
  chainMaker
};
