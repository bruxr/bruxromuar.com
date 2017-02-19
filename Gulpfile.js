'use strict';

var gulp = require('gulp');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('default', ['styles', 'scripts', 'minify']);

gulp.task('styles', function() {
    return gulp.src(['css/normalize.css', 'css/skeleton.css', 'css/styles.css'])
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ['styles', 'scripts'], function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/*.js', ['scripts']);
});