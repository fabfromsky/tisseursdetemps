'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    inject          = require('gulp-inject'),
    mainBowerFiles  = require('main-bower-files'),
    es              = require('event-stream'),
    sass            = require('gulp-sass'),
    reload          = browserSync.reload;


gulp.task('inject', function() {
  var bootstrap     = gulp.src('./app/bower_components/bootstrap/dist/css/bootstrap.min.css', {read: false}),
      foundation    = gulp.src('./app/bower_components/foundation/css/foundation.min.css', {read: false});

  gulp.src('./app/index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower', relative: true}))
    .pipe(inject(es.merge(bootstrap, foundation), {name: 'bower', relative: true}))
    .pipe(inject(gulp.src('./app/scripts/feature/**/*.js', {read: false}), {name: 'features', relative: true}))
    .pipe(inject(gulp.src('./app/styles/css/**/*.css', {read: false}), {name: 'features', relative: true}))
    .pipe(gulp.dest('app'));
})

gulp.task('sass', function() {
  gulp.src(['./app/scripts/feature/**/*.scss', './app/styles/css/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/css'))
    .pipe(reload({ stream:true }));
})

gulp.task('serve', ['sass', 'inject'], function(){
  browserSync({
    server: {
      baseDir: "app"
    }
  });

  gulp.watch(['styles/imgs/**', 'scripts/feature/**/*.{scss, js}', 'styles/css/index.scss'], { cwd:'app' }, ['sass']);
  gulp.watch(['scripts/feature/**/*.html'], { cwd:'app' }, reload);
})