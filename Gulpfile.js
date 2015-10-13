'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('default', ['styles', 'scripts', 'minify']);

gulp.task('styles', function() {
    gulp.src(['sass/normalize.scss', 'sass/*.scss'])
        .pipe(concat('main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('minify', ['minify-scripts', 'minify-styles']);

gulp.task('minify-scripts', function() {
    return gulp.src('scripts.js')
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('minify-styles', function() {
    return gulp.src('./main.css')
        .pipe(minify())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/*.js', ['scripts']);
});