const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task('concat_blueimp', function(){
  return gulp.src([
    './src/jquery.ui.widget.js'
    ,'./src/jquery.fileupload.js'
    ,'./src/jquery.fileupload-audio.js'
    ,'./src/jquery.fileupload-image.js'
    ,'./src/jquery.fileupload-video.js'
    ,'./src/jquery.fileupload-validate.js'
    ,'./src/jquery.fileupload-angular.js'
  ])
  .pipe(concat({path:'blueimp.js'}))
  .pipe(gulp.dest("."))
});

gulp.task("default",["concat_blueimp"]);
