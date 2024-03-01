const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      for (let item in arr) {
        depth = Math.max( depth, this.calculateDepth(arr[item]))
      }
      depth += 1
    }
    return depth
  }





  /* calculateDepth(arr) {
    var depth = 0; 
    if (Array.isArray(arr)) { 
        for (var i in arr) { 
            depth = Math.max(depth, this.calculateDepth(arr[i])); 
        } 
        depth += 1; 
    } 
    return depth; 

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  } */
}

module.exports = {
  DepthCalculator
};
