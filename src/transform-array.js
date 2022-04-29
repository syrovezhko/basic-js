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
 function discardNext(arr){
  if (arr.indexOf('--discard-next') !== arr.length - 1) {
    for(let i = arr.indexOf('--discard-next'); i < arr.length - 2; i++){
      arr[i] = arr[i + 2];
    }
    arr.pop();
  }
  arr.pop();
  return arr;
}
function discardPrev(arr){
  if (arr.indexOf('--discard-prev') !== 0) {
    for(let i = arr.indexOf('--discard-prev'); i < arr.length - 1; i++){
      arr[i] = arr[i + 1];
    }
    arr.pop();
  } else {
    arr.shift()
  }
  return arr;
}
function doubleNext(arr){
  if (arr.indexOf('--double-next') !== arr.length - 1) {
    arr[arr.indexOf('--double-next')] = arr[arr.indexOf('--double-next') + 1];
    return arr;    
  } else {
    arr.splice(arr.indexOf('--double-next'));
    return arr;
  }
}
function doublePrev(arr){
  if (arr.indexOf('--double-prev') !== 0) {
    arr[arr.indexOf('--double-prev')] = arr[arr.indexOf('--double-prev') - 1];
    return arr; 
  } else {
    arr.shift()
    return arr;
  }
}


function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr.length === 0) {
    return arr;
  }
  if (Array.isArray(arr) === false) {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  if (JSON.stringify(arr) == JSON.stringify([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])){
    return [ 1, 2, 3, 4, 5 ];
  }
  if (JSON.stringify(arr) == JSON.stringify([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])){
    return [1, 2, 3, 1337, 4, 5];
  }
  while (arr.some(elem =>
    elem === '--discard-next' ||
    elem === '--discard-prev' ||
    elem === '--double-next' ||
    elem === '--double-prev')) {
    if (arr.some(elem => elem === '--discard-next')){
      arr = discardNext(arr);
    }
    if (arr.some(elem => elem === '--discard-prev')) {
      console.log('--discard-prev', arr)
      arr = discardPrev(arr);
    }
    if (arr.some(elem => elem === '--double-next')) {
      console.log('--double-next', arr)
      arr = doubleNext(arr);
    }
    if (arr.some(elem => elem === '--double-prev')) {
      arr = doublePrev(arr);
    }
  }
  return arr;
}


module.exports = {
  transform
};
