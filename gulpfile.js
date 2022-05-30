var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');

gulp.task('css', async function(){
    gulp.src('./style.css')
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
    
});

