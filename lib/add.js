const util = require( 'util' );
const config = require( './config' );

if ( require.main === module ) {
	throw new Error( util.format( config.err.req, __filename ) );
}

function _concatData( toAdd, data, atBeginning ) {
	if ( !atBeginning ) {
		data = data.concat( toAdd );
	} else {
		data = toAdd.concat( data );
	}
	return data;
}

function _pushData( toAdd, data, atBeginning ) {
	if ( !atBeginning ) {
		data.push( toAdd ) ;
	} else {
		data.unshift( toAdd );
	}
}

function add( toAdd, atBeginning ) {
	if ( Array.isArray( toAdd ) ) {
		this.data = _concatData( toAdd, this.data, atBeginning );
	} else {
		_pushData( toAdd, this.data, atBeginning );
	}
	return this;
}

module.exports = add;
