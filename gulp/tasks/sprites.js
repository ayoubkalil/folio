var gulp = require('gulp'),
	rename = require('gulp-rename'),
	del = require('del'),
	svgSprite = require('gulp-svg-sprite'),
	svg2png = require('gulp-svg2png');

var config = {
	shape:{
		spacing:{
			padding:1
		}
	},
	mode: {
		css: {
			variables:{
				replaceSvg2Png: function(){
					return function(sprite,render){
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite:'sprite.svg',
			render: {
				css: {
					template : './gulp/sprites_templates/sprite.css'
				}
			}
		}
	}
}
gulp.task('beginClean',function(){
	return del(['./dev/temp/sprite', './dev/assets/images/sprites']);
});
gulp.task('createSprite',['beginClean'],function(){
	return gulp.src('./dev/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./dev/temp/sprite/'));
});
gulp.task('createPngCopy', ['createSprite'] ,function(){
	return gulp.src('./dev/temp/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./dev/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'] ,function(){
	return gulp.src('./dev/temp/sprite/css/**/*.{svg,png}')
		.pipe(gulp.dest('dev/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function(){
	return gulp.src('./dev/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./dev/assets/styles/modules'));
});

gulp.task('endClean' , ['copySpriteGraphic','copySpriteCss'],function(){
	return del(['./dev/temp/sprite']);
});
gulp.task('icons',['beginClean','createSprite','createPngCopy' ,'copySpriteCss','copySpriteGraphic','endClean']);
