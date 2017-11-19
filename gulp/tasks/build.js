var gulp = require('gulp'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	browserSync = require('browser-sync').create();

gulp.task('deleteDistFolder',function(){
	return del('./docs');
});

gulp.task('optimizeImages' , ['deleteDistFolder'] , function(){
	return gulp.src(['./dev/assets/images/**/*','!./dev/assets/images/icons', '!./dev/assets/images/icons/**/*'])
		.pipe(imagemin({
			progressive:true,
			interlaced:true,
			multipass:true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'] ,function(){
	return gulp.src('./dev/index.html')
		.pipe(usemin({
			css:[
			function(){
				return rev()
			},
			function(){
				return cssnano()
			}
			],
			js:[
			function(){
				return rev()
			},
			function(){
				return uglify()
			}
			]
		}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('previewDist', function(){
	browserSync.init({
		notify:false,
		server:{
			baseDir : "docs"
		}
	});
});

gulp.task('build',['deleteDistFolder','optimizeImages','usemin']);