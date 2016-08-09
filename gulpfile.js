var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

gulp.task('js', function () {
  gulp.src(['src/**/module.es6', 'src/**/*']).
    pipe(babel({
      presets: ['es2015']
    })).
    pipe(concat('app.js')).
    pipe(uglify()).
    pipe(gulp.dest('.'));
});
