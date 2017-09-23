var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src(['scss/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('autoprefix', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(('css/style.css'), ['autoprefix']);	
});
 
gulp.task('default', ['watch']);
 
