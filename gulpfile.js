/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



gulp.task('clean', function () {
  return del('dist');
});


gulp.task('scripts', function () {
  return gulp.src('src/angular-module-stiffener.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['scripts']);
});
