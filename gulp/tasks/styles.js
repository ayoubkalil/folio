	var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba'),
	autoprefixer = require('autoprefixer');

gulp.task('styles',function(){
	return gulp.src("./dev/assets/styles/app.css")
		.pipe(postcss([cssImport , mixins , cssvars, nested , hexrgba , autoprefixer]))
		.on('error',function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./dev/temp/styles'));
});