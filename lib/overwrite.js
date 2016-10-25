const util = require('util');
const config = require('./config');

if ( require.main === module){ throw new Error( util.format(config.err.req, __filename) )};

function overwrite (newData) {
    if (!(Array.isArray(newData))) {
       throw new Error('Wrong typeof parameter in update method . Should be an array.');
    } 
    this.data = newData;
    return this;
};

module.exports = overwrite; 