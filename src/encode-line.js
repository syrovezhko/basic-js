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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      if(str[i] !== str[i-1]){
        obj['+' + str[i]] += 1;
        break;
      }
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  let arr = [];
  for(let key in obj){
    if(obj[key] > 1){
      arr.push(obj[key]);
    }
    if(key[0] === '+'){
      arr.push(key[1]);
      break;
    }
    arr.push(key);

  }
  return String(arr).split(',').join('');
}

module.exports = {
  encodeLine
};
