'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src(['sass/normalize.scss', 'sass/*.scss'])
        .pipe(concat('main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});