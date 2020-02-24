//See reference project https://playcanvas.com/project/504134/overview/test-es6

const pc = require("playcanvas");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))


const Example = pc.createScript('example');

/**
 * Hmm.. augments won't work though for intellisense.
 * https://github.com/microsoft/TypeScript/issues/30943
 * @augments pc.ScriptType
 */
Example.prototype.construct = function () {
    /** @type {pc.ScriptType} */ const the = this;
    // using "the" instead of "this" for intellisense? Lol.
    alert('a');
}

//Support for async functions
Example.prototype.initialize = async function() {
   console.log("INitialize;");
   alert('b');
}

Example.prototype.update = function (dt) {

};

