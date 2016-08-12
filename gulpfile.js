var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  debug = require('gulp-debug'),
  babel = require('gulp-babel'),
  del = require('del'),
  slim = require("gulp-slim"),
  templateCache = require('gulp-angular-templatecache');

gulp.task('clean', function() {
  return del(['build/**/*', 'public/**/*', 'build', 'public']);
});

var vendorFiles = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js'
]

gulp.task('create_vendor', ['clean'], function () {
  return gulp.src(vendorFiles).
    pipe(debug({title: 'vendor:' })).
    pipe(concat('vendor.js')).
    pipe(gulp.dest('build/.'));
});

gulp.task('es6', ['clean'], function () {
  return gulp.src(['src/**/module.es6', 'src/**/*.es6']).
    pipe(debug({title: 'es6:' })).
    pipe(babel({
      presets: ['es2015']
    })).
    pipe(gulp.dest('build/.'));
});

gulp.task('slim', ['clean'], function() {
  return gulp.src("src/**/*.slim").
    pipe(slim()).
    pipe(gulp.dest("build/."));
});

gulp.task('templates', ['clean', 'slim'], function() {
  return gulp.src('build/**/*.html').
    pipe(templateCache('templates.js', {
      standalone: true
    })).
    pipe(gulp.dest('build/.'));
});

gulp.task('default', ['clean', 'es6', 'create_vendor', 'templates'], function () {
  gulp.src(['build/vendor.js', 'build/**/module.js', 'build/**/*.js']).
    pipe(debug({title: 'js:' })).
    pipe(concat('app.js')).
    pipe(debug({title: 'min:' })).
    pipe(uglify()).
    pipe(gulp.dest('public/.'));
});

