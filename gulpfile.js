require("babel-register");

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel');

gulp.task('js', function () {
  gulp.src(['src/**/module.es6', 'src/**/*']).
    pipe(babel()).
    pipe(concat('app.js')).
    pipe(gulp.dest('.'))
});
