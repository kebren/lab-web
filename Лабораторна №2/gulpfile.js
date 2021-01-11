var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('mincss', function(){
 return gulp.src('stylesheet.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(minifyCss())
   .pipe(gulp.dest('stylesheetmin'));
});

gulp.task('sass', function () {
  return gulp.src('stylesheet.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheet'));
});