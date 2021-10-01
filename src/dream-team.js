import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let f=[];
  if(Array.isArray(members)&&members.length) {
    members.filter(e=>typeof e==='string').toString().replace(/ /g,'').toUpperCase().split(',').map(e=>f.push(e.charAt(0)));
    return f.sort().join('');
  }
  return 0===1;
}
