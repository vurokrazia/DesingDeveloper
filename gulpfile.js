var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('hello', function () {
  console.log("Hello!! ");
})
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/stylesheets'))
})
gulp.task('style_min', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(concat("style_main.min.css"))
  .pipe(gulp.dest('public/stylesheets'))
})
// gulp.task('watch', ['style_min'], function (){
//   gulp.watch('scss/**/*.scss', ['style_min']);
// });
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series('style_min'));
  });