const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr.length === 0) {
    return arr;
  }
  if (Array.isArray(arr) === false) {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === '--discard-next') {
      if (i === arr.length - 1) {
        arr.pop();
        return arr;
      }
      for(let j = i; j < arr.length - 2; j++){
        arr[j] = arr[j+2];
      }
      arr = arr.splice(-2);
      
    } else if (arr[i] === '--discard-prev'){
      if (i === 0) {
        for(let j = 0; j < arr.length - 1; j++){
          arr[j] = arr[j+1];
        }
        arr.pop();
      } else {
        for(let j = i - 1; j < arr.length - 2; j++){
          arr[j] = arr[j+2];
        }
        arr = arr.splice(-2);
      }
    } else if (arr[i] === '--double-next'){
      if (i === arr.length - 1) {
        arr.pop();
      } else {
        arr[i] = arr[i + 1];
      }
    } else if (arr[i] === '--double-prev'){
      if (i === 0) {
        arr.shift();
      } else
      arr[i] = arr[i - 1];
    }
  }
  return arr;
}

module.exports = {
  transform
};
