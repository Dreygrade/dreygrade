/* for sass I originally used gulp-ruby-sass but had problema and changed to using gulp-sass, something about not being able to use .pipe() with gulp-ruby-sass -
https://stackoverflow.com/questions/38328995/gulp-ruby-sass-error-must-provide-pattern*/
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    imageResize = require('gulp-image-resize'),
    rename = require("gulp-rename");


/* *************************************************** */
/* ****** For localhost/cidreygrade site ****** */

gulp.task("resize976", function () {
  gulp.src("assets/images/originals/*.{jpg,jpeg,png}")
    .pipe(imageResize({  
      width : 976,
      height : 976,
      crop : true,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-976"; }))
    .pipe(gulp.dest("cc-highlights/2018/april/img"));
});

gulp.task("resize480", function () {
  gulp.src("assets/images/originals/*.{jpg,jpeg,png}")
    .pipe(imageResize({  
      width : 480,
      height : 480,
      crop : true,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(gulp.dest("cc-highlights/2018/april/img"));
});

/* ****** END OF For localhost/cidreygrade site ****** */
/* *************************************************** */
 

/*gulp.task('resize', function () {
  gulp.src('cc-highlights/2018/feb/img/*.jpg')
    .pipe(imageResize({
      width : 976,
      height : 976,
      crop : true,
      upscale : true
    }))
    .pipe(gulp.dest('cc-highlights/2018/feb/img/976'));
});*/
 
gulp.task('hello', function() {
  console.log('Hello Graeme');
});



gulp.task("resizewithsuffix-desktop", function () {
  gulp.src("cc-highlights/2018/feb/img/originals/duddle/*.{jpg,png}")
    .pipe(imageResize({  
      width : 1700,
      height : 1700,
      crop : false,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-1700"; }))
    .pipe(gulp.dest("cc-highlights/2018/feb/img"));
});

gulp.task("resizewithsuffix-976", function () {
  gulp.src("cc-highlights/2018/april/img/originals/*.{jpg,png}")
    .pipe(imageResize({  
      width : 976,
      height : 976,
      crop : true,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-976"; }))
    .pipe(gulp.dest("cc-highlights/2018/april/img"));
});

gulp.task("resizewithsuffix-480", function () {
  gulp.src("cc-highlights/2018/april/img/originals/*.{jpg,png}")
    .pipe(imageResize({  
      width : 480,
      height : 480,
      crop : true,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(gulp.dest("cc-highlights/2018/april/img"));
});

// set crop to false for it to keep ratio
gulp.task("resizewithsuffix-duddle", function () {
  gulp.src("cc-highlights/2018/feb/img/originals/duddle/*.{jpg,JPG,png}")
    .pipe(imageResize({  
      width : 700,
      height : 700,
      crop : false,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-700"; }))
    .pipe(gulp.dest("cc-highlights/2018/feb/img"));
});

// General image size change with same ratio
// set crop to false for it to keep ratio
gulp.task("resizewithsuffix-general", function () {
  gulp.src("cc-highlights/2018/image-change/*.{jpg,JPG,png}")
    .pipe(imageResize({  
      width : 2560,
      height : 1152,
      crop : true,
      upscale : true
    }))
    .pipe(rename(function (path) { path.basename += "-dg"; }))
    .pipe(gulp.dest("cc-highlights/2018/image-change/changed"));
});

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// Styles Task
// Styles
gulp.task('styles', function(){
    gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('css-gulptest/'));
});

// Watch Task
// Watches JS
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('cc-highlights/2018/feb/img/*.{jpg,png}', ['resizewithsuffix']);
    gulp.watch('scss/**/*.scss', ['styles'])
});

gulp.task('default', ['scripts', 'styles', 'watch']);