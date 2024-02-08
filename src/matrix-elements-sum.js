const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) { 
  let solutionSum = 0;
  for (let i = matrix.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i - 1][j] !== 0) {
        solutionSum += matrix[i][j];
      }
    }
  }
  return solutionSum + matrix[0].reduce((a, b) => a + b, 0)
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
