const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0; 
  const arrayStr2 = s2.split(''); 
  for (let char of s1){ 
    let index = arrayStr2.findIndex(c => c === char); 
    if(index >= 0){ 
      counter++; 
      arrayStr2.splice(index, 1); 
    } 
  } 
  return counter; 
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
