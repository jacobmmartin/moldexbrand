var gulp = require('gulp');
var l10n = require('gulp-l10n');
 
var opts = {
  elements: ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'a', 'button', 'strong', 'i'],
  attributes: [],
  directives: 'translate=yes',
  attributeSetter: 'translate-attrs'
};

gulp.task('extract-locales', function () {
  return gulp.src('app/html-FR/**/*.html')
    .pipe(l10n.extract(opts))
    .pipe(gulp.dest('locales'));
});