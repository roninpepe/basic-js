import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  let c=0,r='';
  str.split('').forEach(function(v,i){c++;if(this[i]!==this[i+1]){c>1?r+=c+this[i]:r+=this[i];c=0}},str.split(''));
  return r;
}
