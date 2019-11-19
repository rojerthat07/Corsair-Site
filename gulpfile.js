const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');



gulp.task('minifyCSS', () =>{
    return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles/'));
})



gulp.task('minifyJS', ()=>{
    gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
})