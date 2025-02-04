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
  const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
  }
  if (!options.additionRepeatTimes && !options.repeatTimes) {
    return str+options.addition
  }
  for (let i = 0; i < options.repeatTimes; i += 1) {
    if (typeof str === Object) {
      strArr.push(`${objWithSpecificCoercion}`)
    } else {
      strArr.push(`${str}`);
    }
    


    for (let j = 0; j < options.additionRepeatTimes; j += 1) {
      if (typeof str === Object) {
        strArr.push(`${objWithSpecificCoercion}`)
      } else {
        strArr.push(`${options.addition}`);
      }
      if (j + 1 !== options.additionRepeatTimes && options.additionSeparator !== '') {
        strArr.push(options.additionSeparator || '|');
      }
      
    }
    
    if (i + 1 !== options.repeatTimes && options.separator !== '') {
      strArr.push(options.separator || '+')
    }
    
  }
  return strArr.join('') */
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

}

module.exports = {
  repeater
};
