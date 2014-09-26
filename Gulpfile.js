/*
 * kira
 * https://github.com/chrisenytc/kira
 *
 * Copyright (c) 2014, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    stylish = require('jshint-stylish');

gulp.task('jshint', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(['./lib/**/*.js', './test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Copy all static images
gulp.task('mocha', function() {
    return gulp.src('./test/*.js')
        .pipe(mocha({
            globals: ['chai'],
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'spec'
        }));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(['./lib/**/*.js', './test/**/*.js'], ['jshint']);
});

gulp.task('test', function() {
    gulp.run('mocha', function() {});
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['jshint', 'mocha', 'watch']);
