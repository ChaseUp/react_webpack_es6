/*
* created by chenjian on 17.2.10
*/
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');	// 分离css模块，打包成单独的文件
var extractCSS = new ExtractTextPlugin('css/style.css');
var extractSASS = new ExtractTextPlugin('css/style.css');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin({	// 分离第三方插件，打包到vendor.js
    names: ['vendor']
});

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: ['react','react-dom']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist/js/')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
	        	test: /\.css$/,
	        	use: extractCSS.extract({
					fallback: "style-loader",
		          	use: "css-loader"
	        	})
	      	},
			{
				test: /\.scss$/,
				use: extractSASS.extract({
					fallback: "style-loader",
					use: [
						{loader: 'css-loader'},
						{loader: 'sass-loader'}
					]
				})
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015','react']
				},
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		commonPlugin,
        extractCSS,
        extractSASS
    ]
}