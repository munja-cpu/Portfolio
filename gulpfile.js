const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifyCss = require('gulp-uglifycss');


// Minify JS
gulp.task('minify', function(){
    gulp.src('main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Minify CSS
gulp.task('minifyCss', function(){
    gulp.src('style.css')
    .pipe(uglifyCss())
    .pipe(gulp.dest('dist/css'));
});