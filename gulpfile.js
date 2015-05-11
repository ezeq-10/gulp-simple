var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var path = require('path');


gulp.task('default', function () {
  console.log('This is a default task');
});


gulp.task('compile-js', function () {
  // browserify
  var bundle = browserify('./app/src/js/main.js').bundle();

  return bundle
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/public/assets/js'));
});


gulp.task('compile-css', function () {
  return gulp.src('./app/src/less/**/*.less')
    .pipe( less ({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./app/public/assets/css'))
});


gulp.task('watch', function () {
  gulp.watch(['./app/src/js/**/*.js'], ['compile-js']);
  gulp.watch(['./app/src/less/**/*.less'], ['compile-css']);
});