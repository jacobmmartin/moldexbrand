var gulp = require('gulp');
var l10n = require('gulp-l10n');
 
var opts = {
 
  attributes: [],
  directives: 'translate=yes',
  attributeSetter: 'translate-attrs'
};

gulp.task('extract-locales', function () {
  return gulp.src('app/**/*.html')
    .pipe(l10n.extract(opts))
    .pipe(gulp.dest('locales'));
});