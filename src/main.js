// !!!REQUIRED IMPORTS!!!
import "babel-polyfill";



/**********************************************/
/* Your code                                  */
/**********************************************/

import './example.ts';
//import './example.js';
console.log("Main.js detected: runtime? "+ (typeof window === 'object' && typeof importScripts !== 'function'));