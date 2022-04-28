const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members) !== true){
    return 0;
  }
  let string = '';
  let arr = [];
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === "string") {
      let a = members[i].trim();
      arr.push(a[0].toUpperCase());
    }
  };
  arr = arr.sort();
  console.log(arr)
  for(let i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
}

module.exports = {
  createDreamTeam
};
