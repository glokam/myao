const util = require('util');
const config = require('./config');

if ( require.main === module){ throw new Error( util.format(config.err.req, __filename) )};


function sort (key) {
    var order = 1;
    if(key.charAt(0) === "-") {
        order = -1;
        key = key.substr(1);
    }
    this.data.sort(function (a,b) {
        var result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
        return result * order;
    })
    return this;
}

module.exports = sort; 