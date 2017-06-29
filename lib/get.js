const util = require( 'util' );
const config = require( './config' );

if ( require.main === module ) {
	throw new Error( util.format( config.err.req, __filename ) );
}

function get( key, id ) {
	var leng = this.getLength(),
		data = this.data,
		i;
	for ( i = 0; i < leng; i++ ) {
		if ( data[ i ][ key ] === id ) {
			return data[ i ];
		}
	}
	return null;
}

module.exports = get;
