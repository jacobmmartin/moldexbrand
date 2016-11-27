var gulp = require('gulp');
var l10n = require('gulp-l10n');

var opts = {
  attributes: ['alt', 'title'],
  directives: 's18n',
  attributeSetter: 'translate-attrs'
};

gulp.task('extract-locales', function () {
  return gulp.src('english/**/*.html')
    .pipe(l10n.extract(opts))
    .pipe(gulp.dest('locales'));
});

