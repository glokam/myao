const util = require('util');
const config = require('./config');

if ( require.main === module){ throw new Error( util.format(config.err.req, __filename) )};


function getvalues (key) {
      var leng = this.getLength(), 
        data = this.data, i,
        values = [];  
    for (i = 0; i < leng; i++) {
      values.push(data[i][key]);   
    }
    return values;
};

module.exports = getvalues;