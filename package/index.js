var gulp = require('gulp');

gulp.task('moveBase',function(){
    return gulp.src('../bin/*')
        .pipe(gulp.dest('../../../'));
});
gulp.task('moveExtended',['moveBase'],function(){
    return gulp.src('ExtendedFolder/*')
        .pipe(gulp.dest('ResultFolder/'));
});
gulp.task('mergeFolders',['moveBase','moveExtended']);
