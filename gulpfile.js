var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  debug = require('gulp-debug'),
  babel = require('gulp-babel');

var vendorFiles = [
  'node_modules/angular/angular.min.js'
]

gulp.task('create_vendor', function () {
  gulp.src(vendorFiles).
    pipe(debug({title: 'vendor:' })).
    pipe(concat('vendor.js')).
    pipe(gulp.dest('build/.'));
});

gulp.task('es6', function () {
  gulp.src(['src/**/module.es6', 'src/**/*']).
    pipe(debug({title: 'es6:' })).
    pipe(babel({
      presets: ['es2015']
    })).
    pipe(gulp.dest('build/.'));
});

gulp.task('xjs', ['es6', 'create_vendor'], function () {
  gulp.src(['build/vendor.js', 'build/module.js', 'build/**/*.js']).
    pipe(debug({title: 'js:' })).
    pipe(concat('app.js')).
    pipe(debug({title: 'min:' })).
    pipe(uglify()).
    pipe(gulp.dest('.'));
});

gulp.task('js', function () {
  gulp.src(['node_modules/angular/angular.min.js', 'src/**/module.es6', 'src/**/*']).
    pipe(concat('app.js')).
    pipe(babel({ presets: ['es2015'] })).
    pipe(uglify()).
    pipe(gulp.dest('.'));
});
