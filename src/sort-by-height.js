const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrFull = arr;
  let solution = [];
  let filterArr = arrFull.filter((i) => i !== -1);
  let sortFilterArr = filterArr.sort(function(a, b) {return a - b});
  for (let i = 0; i < arrFull.length; i += 1){
    if (arrFull[i] !== -1) {
      solution.push(sortFilterArr[0])
      sortFilterArr.shift();
    } else {
      solution.push(-1);
    }
    
  }
  return solution
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
