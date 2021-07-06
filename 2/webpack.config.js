var debug = process.env.NODE_DEV !== "production";
var webpack = require('webpack');
const path = require('path')

module.exports = {
	context: path.join(__dirname,"src"),
	entry: "./js/client.js",
	output: {
		path: __dirname + "/src/",
		filename: "client.min.js"
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules | bower_components)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react','@babel/preset-env']
				}
			}]
		}]
	},
	devServer: {
                contentBase: path.join(__dirname,'src'),
        },
	plugins: debug? [] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false})
	]
}
