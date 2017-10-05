var path = require('path');


module.exports = {
	entry : {
		App : "./dev/assets/scripts/app.js",
		Preloader: "./dev/assets/scripts/preloader.js"
		},
	output : {
		path: path.resolve(__dirname,"./dev/temp/scripts")  , 
		filename : "[name].js"
	},
	module:{
		loaders:[
			{
				loader : 'babel-loader',
				query : {
					presets : ['es2015']
				},
				test : /\.js$/,
				exclude: /node_modules/

			}
		]
	}

}