var gulp = require('gulp');

gulp.task('moveBase',function(){
  return gulp.src('../bin/*')
         .pipe(gulp.dest('../../../'));
});
gulp.task('moveExtended',['moveBase'],function(){
  return gulp.src('../bin/*')
         .pipe(gulp.dest('../../../'));
});
gulp.task('mergeFolders',['moveBase','moveExtended']);
