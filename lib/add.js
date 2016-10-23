const config = require('./config');

if ( require.main === module){ throw new Error(__filename + ' ; ' + config.err.req)};

function add (toAdd, atBeginning) {
    if (Array.isArray(toAdd)) {
        if (!atBeginning) {
            this.data = this.data.concat(toAdd);
        } else {
            this.data = toAdd.concat(this.data);
        };
    } else {
        if (!atBeginning) { 
            this.data.push(toAdd) ;
        } else { 
            this.data.unshift(toAdd);
        }
    }
    return this;
};

module.exports = add;