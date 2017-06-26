const path = require('path');

module.exports = {
	entry: './lib/myao.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "lib")
				],
				loader: 'eslint-loader',
				exclude: /node_modules/ }
		]
	}
}
