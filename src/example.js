//See reference project https://playcanvas.com/project/504134/overview/test-es6
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * @type {typeof pc.ScriptType}
 */
const Example = pc.createScript('example');


Example.prototype.construct = function () {
    
}

//Support for async functions
Example.prototype.initialize = async function() {
   console.log("INitialize;");
   alert('b');
}

Example.prototype.update = function (dt) {

};

