const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let output
  let halfLife
  if (typeof(sampleActivity) === 'string') {
    if (parseInt(sampleActivity) > 0) {
      halfLife = 0.693/HALF_LIFE_PERIOD
      output = Math.log(MODERN_ACTIVITY/sampleActivity)/halfLife
      if (output > 0) {
        return Math.ceil(output)
      }
    } 
  }
  return false
}

module.exports = {
  dateSample
};
