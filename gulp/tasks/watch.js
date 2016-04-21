'use strict';
var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.css.main, ['css:custom']);
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.html.includes, ['html', 'webpack']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.js.all, ['webpack']);
});
