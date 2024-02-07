const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  /* let strArr = [];
  for (let i = 0; i < options.repeatTimes; i += 1) {
    strArr.push(str);

    for (let j = 0; j < options.additionRepeatTimes; j += 1) {
      strArr.push(options.addition);
      strArr.push(options.additionSeparator);
    }
    strArr.push(options.separator)
  }
  return strArr.join('') */
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
