var gulp = require("gulp");
var path = require("path");

gulp.task("moveBase",function(){
  return gulp.src("../bin/*")
         .pipe(gulp.dest("../../../"));
});
gulp.task("moveExtended",["moveBase"],function(){
  return gulp.src("../bin/*")
         .pipe(gulp.dest(path.join(process.cwd())));
});
gulp.task("mergeFolders",["moveBase","moveExtended"]);
