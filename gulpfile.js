var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// Define some paths.
var paths = {
app_js: ['./Assets/Components/*.jsx'],
//js: ['./Assets/build'],
};


gulp.task('build', function () {
    browserify({
        entries: 'Assets/Components/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('Assets/build'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  //gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'build']);	