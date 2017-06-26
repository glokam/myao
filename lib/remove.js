const util = require( 'util' );
const config = require( './config' );

if ( require.main === module ){
	throw new Error( util.format( config.err.req, __filename ) );
}

function remove( key, id ) {
	var leng = this.getLength(),
		data = this.data, i;

	for ( i = 0; i < leng; i++ ) {
		if ( data[ i ][ key ] === id ) {
			this.data.splice( i, 1 );
			break;
		}
	}
	return this;
}

module.exports = remove;
