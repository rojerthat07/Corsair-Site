const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');



gulp.task('minify-css', () =>{
    return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles/'));
})