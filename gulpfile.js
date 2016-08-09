var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

gulp.task('es6', function () {
  gulp.src(['src/**/module.es6', 'src/**/*']).
    pipe(babel({
      presets: ['es2015']
    })).
    pipe(gulp.dest('build/.'));
});

gulp.task('js', ['es6'], function () {
  gulp.src(['vendor/**/*', 'build/**/module.js', 'build/**/*.js']).
    pipe(concat('app.js')).
    pipe(uglify()).
    pipe(gulp.dest('.'));
});
