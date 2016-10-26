const util = require('util');
const config = require('./config');

if ( require.main === module){ throw new Error( util.format(config.err.req, __filename) )};


function set(key, id, obj) {
  var target = this.get(key, id); 
    
    if (!target) return this; 
    Object.assign(target, obj);
    return this;
};

module.exports = set;