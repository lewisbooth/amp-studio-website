var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./static"
        }
    });
    gulp.watch("./static/css/*.css").on('change', browserSync.reload);
    gulp.watch("./static/*.html").on('change', browserSync.reload);
});