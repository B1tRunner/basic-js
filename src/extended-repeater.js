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
function repeater(str, options) {
  let strNew = String(str);
  let arr = [];
  let option = options;
  for (let i = 0; i < option.repeatTimes; i += 1) {
    arr.push(strNew);
    
    for (let j = 0; j < option.additionRepeatTimes; j += 1) {
      arr.push(option.addition);

      if (Number.isNaN(option.additionRepeatTimes) || option.additionRepeatTimes < 1) {
        break
      }
      if (j === option.additionRepeatTimes - 1) {
        break
      }

      arr.push(option.additionSeparator);
    }
    if (Number.isNaN(option.repeatTimes) || option.repeatTimes < 1) {
      break
    }

    if (i === option.repeatTimes - 1) {
      break
    }
    
    arr.push(option.additionSeparator);
  }

  return arr.join('')
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
