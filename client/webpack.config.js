const wpckPlugin = require('html-webpack-plugin');
const wpckPWA = require('webpack-pwa-manifest');
const pathDir = require('path');
const { InjectManifest: inMnfst } = require('workbox-webpack-plugin');

module.exports = () => {
	return {
    	mode: 'development',
    	entry: {
    		main: './src/js/index.js',
    		install: './src/js/install.js'
    	},
    	output: {
    		filename: '[name].bundle.js',
    		path: pathDir.resolve(__dirname, 'dist'),
    	},
    	plugins: [
      		new wpckPlugin({
        	template: './index.html',
        	title: 'JATE'
      	}),
      	new inMnfst({
        	swSrc: './src-sw.js',
        	swDest: 'src-sw.js',
      	}),
      	new wpckPWA({
        	fingerprints: false,
        	inject: true,
        	name: 'JATE',
        	short_name: 'JATE',
        	desciption: 'JATE, aka Just Another Text Editor',
        	background_color: '#225ca3',
        	theme_color: '#225ca3',
        	start_url: '/',
        	publicPath: '/',
        	icons: [
          		{
            		src: pathDir.resolve('src/images/logo.png'),
            		sizes: [96, 128, 192, 256, 384, 512],
            		destination: pathDir.join('assets', 'icons'),
          		},
        	],
      	}),
    ],

		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", 'css-loader'],
				},
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-object-rest-spread',
								'@babel/transform-runtime'],
						},
					},
				},
			],
		},
	};
};