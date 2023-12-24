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
  let nArr = String(n).split('').map(Number);
  let solutionArray = [];
  for (let i = 0; i < nArr.length; i += 1){
    let tempoArray = nArr.slice();
    tempoArray.splice(i, 1)
    solutionArray.push(Number(tempoArray.join('')))
  }
  return solutionArray.sort((a, b) => b - a)[0];
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
