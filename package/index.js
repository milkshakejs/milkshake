var glob = require('glob'),
    fs = require("fs");

gulp.task('web_dev', function () {
    es.merge(gulp.src(path.resolve("../bin")),
            gulp.src(process.cwd()))
            .pipe(gulp.dest('out'));
});
