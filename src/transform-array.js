import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(/* arr */) {
  if(!Array.isArray(arr)){throw new Error()};
  if(!arr.length){return []};
  let n = [];
  for(let i=0;i<arr.length;i++){
    arr[i]==='--discard-next'?i++:arr[i]==='--discard-prev'?n.pop():arr[i]==='--double-next'?n.push(arr[i+1]):arr[i]==='--double-prev'?n.push(arr[i-1]):n.push(arr[i]);
  };
  return newArr.filter(e=>e!==undefined);
}
