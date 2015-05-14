var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var path = require('path');


/**
* Default task
*/
gulp.task('default', function() {
  console.log('This is a default task');
});


/**
* JSHint
*/
gulp.task('jshint', function() {
  return gulp.src('./app/src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


/**
* Compile JS
* - browserify
* - uglify
* - minify
*/
gulp.task('compile-js', function() {
  // browserify
  var bundle = browserify('./app/src/js/main.js').bundle();

  return bundle
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./app/public/assets/js'))    
});


/**
* Compile LESS files
*/
gulp.task('compile-css', function() {
  return gulp.src('./app/src/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./app/public/assets/css'))
});


/**
*  Watcher
*/
gulp.task('watch', function() {
  gulp.watch(['./app/src/js/**/*.js'], ['jshint', 'compile-js']);
  gulp.watch(['./app/src/less/**/*.less'], ['compile-css']);
});