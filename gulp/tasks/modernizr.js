var gulp = require('gulp'),
	modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
	return gulp.src(['./dev/assets/styles/**/*.css','./dev/assets/scripts/**/*.js'])
		.pipe(modernizr({
			"options" : [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./dev/temp/scripts'));
});