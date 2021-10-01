import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const s=['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter'];
  if(!arguments.length){return 'Unable to determine the time of year!'};
  if(Object.prototype.toString.call(date)==='[object Date]'){return s[date.getMonth()]};
  throw new Error();
}
