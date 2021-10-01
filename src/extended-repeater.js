import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  options.addition===null?options.addition='null':0
  options.additionRepeatTimes==undefined?options.additionRepeatTimes=1:0
  options.additionSeparator==undefined?options.additionSeparator='|':0
  options.repeatTimes==undefined?options.repeatTimes=1:0
  options.separator==undefined?options.separator='+':0
  let a=[],r=[],o=[String(str)];
  if(options.addition!=null){
      for(let i=1;i<=options.additionRepeatTimes;i++){a.push(String(options.addition))}
      o.push(String(a.join(options.additionSeparator)));
  }
  for(let i=1;i<=options.repeatTimes;i++){r.push(o.join(''))}
  return r.join(options.separator)
}
