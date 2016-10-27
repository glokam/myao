const util = require('util');
const config = require('./config');

if ( require.main === module){ throw new Error( util.format(config.err.req, __filename) )};

function replace (key, id, obj) {
    var hasOwn = Object.prototype.hasOwnProperty, 
        target = this.get(key, id);
    
    if (!target) return this;
    
    for (var prop in target) {
        if (hasOwn.call(target, prop)) delete target[prop];
    }
    
    Object.assign(target, obj);
    
    return this;
};

module.exports = replace;