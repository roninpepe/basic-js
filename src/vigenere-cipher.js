import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(m){
    this.m=m!=undefined?m:true
  }
  encrypt(v,s){
    v=v.toUpperCase();s=s.toUpperCase();
    let r='',x=0;
    for(let i=0;i<v.length;i++){
        let k=s[(x>=s.length?x%s.length:x)];
        if(v[i].charCodeAt()>64&&v[i].charCodeAt()<91){r+=String.fromCharCode((v[i].charCodeAt()+k.charCodeAt()+26)%26+65);x++}
        else r+=v[i]
    }
    return this.m?r:r.split('').reverse().join('');
  }
  decrypt(v,s){
    v=v.toUpperCase();s=s.toUpperCase();
    let r='',x=0;
    for(let i=0;i<v.length;i++){
        let k=s[(x>=s.length?x%s.length:x)];
        if(v[i].charCodeAt()>64&&v[i].charCodeAt()<91){r+=String.fromCharCode((v[i].charCodeAt()-k.charCodeAt()+26)%26+65);x++}
        else r+=v[i]
    }
    return this.m?r:r.split('').reverse().join('');
  }
}
