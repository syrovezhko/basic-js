const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let turnsCount = 0;
  let secondsCount = 0;

  for (let i = 1; i <= disksNumber; i++) {
    turnsCount += Math.pow(2, (i - 1));
  }

  secondsCount = Math.floor(turnsCount * 3600 / turnsSpeed);

  return { turns: turnsCount, seconds: secondsCount };
}

module.exports = {
  calculateHanoi
};
