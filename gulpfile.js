const gulp = require('gulp');
const  sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const  sassGlob = require('gulp-sass-glob');
const pug         = require('gulp-pug');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');




/// Function Sass Compiler 

function websiteMainStyle (){

    return gulp.src(['./src/scss/main.scss'])
            .pipe(sassGlob())
            .pipe(plumber(
                {
                    errorHandler: function(err) {
                      // display the error message
                      console.log(err.message);
                      // end the errored task
                      this.emit('end') }
                  }
            ))
            .pipe(sass())
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(gulp.dest('./src/assets/css'))
    
    }

function pugCompiler (){
    return gulp.src(['src/pug/*.pug'])
        .pipe(plumber(
            {
                errorHandler: function(err) {
                // display the error message
                 console.log(err.message);
                // end the errored task
                this.emit('end') }
            }
        ))
        .pipe(pug({
          doctype: 'html',
          pretty: true
        }))
        .pipe(gulp.dest('./src'));
}   


function watchFiles (){
    browserSync.init({
        server: {
            baseDir: "src",
            index: "index.html"
        },
        open: true,
        notify: false,
        reloadDelay: 100
        
    })

   return  gulp.watch(['./src/scss/*','./src/scss/**/*','src/pug/*','src/pug/**/*'], gulp.series(websiteMainStyle , pugCompiler )).on('change',browserSync.reload);
};


exports.websiteMainStyle = websiteMainStyle;
exports.pugCompiler = pugCompiler;
exports.watchFiles = watchFiles;

gulp.task('default',gulp.series(pugCompiler,websiteMainStyle,watchFiles));
