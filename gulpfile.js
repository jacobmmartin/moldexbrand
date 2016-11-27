var gulp = require('gulp');
var l10n = require('gulp-l10n');

var opts = {
  attributes: [],
  directives: 'translate=yes',
  attributeSetter: 'translate-attrs',
  elements: ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'a', 'button', 'li', 'header', 'label']
};

gulp.task('extract-locales', function () {
  return gulp.src('english/**/*.html')
    .pipe(l10n.extract(opts))
    .pipe(gulp.dest('locales'));
});
