var fs = require('fs');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var path = require('path');
var debug = require('gulp-debug');

debugger;
function getBundler() {
  return (
    browserify({
        entries: 'Assets/Components/index.jsx',
        extensions: ['.jsx'],
        debug : true })
    .transform(babelify));
}

function update(bundler) {
  bundler
  .bundle()
  .on('error', gulpUtil.log)
  .on('end', function() {
    return gulpUtil.log('Bundle complete');
  })
  .pipe(source('bundle.js'))
  .pipe(debug({title: 'unicorn:'}))
  .pipe(gulp.dest('Assets/build'));
}

  gulp.task('browserify', function() {
    return update(getBundler());
  });

  gulp.task('watch', function(){
    var watch = watchify(getBundler());
    watch.on('update', function(){
      return update(watch);
    });
    return update(watch);
  });

gulp.task('default', ['browserify', 'watch'])