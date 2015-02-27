var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var PathTo = {
  SassFiles: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/styles',
  PublicCssFiles: './public/styles/*.css',
  PublicHTML: './public/index.html',
  Publicjs: './public/js/app.js'
};

gulp.task('watch-files', function (){
  gulp.watch(PathTo.SassFiles, ['compile-sass']);
  gulp.watch(PathTo.PublicCssFiles,["html"]);
  gulp.watch(PathTo.PublicHTML, ["html"]);
  gulp.watch(PathTo.Publicjs, ["html"]);
});

gulp.task('compile-sass', function (){
  return gulp
          .src(PathTo.SassFiles, ['compile-sass'])
          .pipe(sass())
          .pipe(gulp.dest(PathTo.PublicCss))
          .pipe(connect.reload());

});

gulp.task('html', function (){
  return gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('public-server', function (){
  connect.server({
    root: './public',
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['public-server', 'compile-sass', 'watch-files']);
