	var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task("watch",function(){
	browserSync.init({
		notify:false,
		server:{
			baseDir : "dev"
		}
	});
	watch('./dev/index.html',function(){
		browserSync.reload();
	});

	watch('./dev/assets/styles/**/*.css',function(){
		gulp.start('cssIjection');
	});
	watch('./dev/assets/scripts/**/*.js',function(){
		gulp.start('scriptsRefresh');
	});

});

gulp.task("cssIjection", ['styles'] ,function(){
	return gulp.src('./dev/temp/styles/app.css')
	.pipe(browserSync.stream());
});
gulp.task("scriptsRefresh", ['scripts'] ,function(){
	browserSync.reload();
});
