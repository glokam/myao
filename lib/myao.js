const util = require( 'util' );
const config = require( './config' );
const add = require( './add' );
const remove = require( './remove' );
const overwrite = require( './overwrite' );
const get = require( './get' );
const set = require( './set' );
const replace = require( './replace' );
const getValues = require( './getvalues' );
const sort = require( './sort' );

if ( require.main === module ){
	throw new Error( util.format( config.err.req, __filename ) );
}
var Myao = function( data ) {
	if ( !( Array.isArray( data ) ) && data !== undefined ) {
		throw new Error( 'Wrong typeof parameter in Myao.create . Should be an array or undefined for empty object' );
	} else if ( data === undefined ) {
		this.data = [];
	} else {
		this.data = data;
	}

	return this;
};

Myao.prototype = {
	add,
	remove,
	overwrite,
	get,
	set,
	replace,
	getValues,
	filter( key, val ) {
		var leng = this.getLength(),
			data = this.data,
			newData = [],
			reverse = false,
			statemant,
			i;

		if ( key.charAt( 0 ) === '-' ) {
			reverse = true;
			key = key.substr( 1 );
		}

		for ( i = 0; i < leng; i++ ) {

			if ( reverse ) {
				if ( Array.isArray( val ) ) {
					statemant = true;
					for ( var j = 0; j < val.length; j++ ) {
						if ( data[ i ][ key ] === val[ j ] ) {
							statemant = false;
							break;
						}
					}
					if ( statemant ) {
						newData.push( data[ i ] );
					}
				} else {
					if ( data[ i ][ key ] !== val ) {
						newData.push( data[ i ] );
					}
				}
			} else {
				if ( Array.isArray( val ) ) {
	                for ( var j = 0; j < val.length; j++ ) {
	                    if( data[ i ][ key ] === val[ j ] ) {
	                        newData.push( data[ i ] );
	                        break;
	                    }
	                }
	            } else {
	                if( data[ i ][ key ] === val ) newData.push( data[ i ] );
	            }
	        }
	    };
	    return new Myao( newData );
	},//end of filter method
	sort,
	each ( callback ) {
    var leng = this.getLength(),
        data = this.data, i;
        values = [];
    for (i = 0; i < leng; i++) {
      callback(data[i], i);
    }
    return this;
},//end of each method
	getAll () {
    return this.data;
},//end of getAll method
	getLength () {
    return this.data.length;
}//end of getLength
};//end of Myao.prototype

exports.create = function ( data ) {
	return new Myao( data );
};
