var gulp = require('gulp'),
    es = require('event-stream');

gulp.task('web_dev', function () {
    es.merge(gulp.src(path.resolve("../bin")),
            gulp.src(process.cwd()))
            .pipe(gulp.dest('out'));
});
