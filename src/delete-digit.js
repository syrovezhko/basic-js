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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stringOfArg = String(n);
  let max = Array(stringOfArg.length-2).fill(0);
  max.unshift(1);
  max = Number(String(max).split(',').join(''));
  
  for(let i = 0; i < stringOfArg.length; i++){
    let x = stringOfArg.slice(0, i) + stringOfArg.slice(i + 1);
    x = Number(x);
    if(x > max){
      max = x;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
