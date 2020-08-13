import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import minifyCss from 'gulp-minify-css';
import minifyJs from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import sass from 'gulp-sass';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('minify-css', () => {
  return gulp.src('.tmp/styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('source/dist/styles_min'));
});

gulp.task('style', function () {
  gulp.src('source/app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('styles-dist', function () {
  gulp.src('source/app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('source/dist/styles'));
});

gulp.task('minify-js', () => {
  return gulp.src('source/app/scripts/*.js')
    .pipe(minifyJs())
    .pipe(gulp.dest('source/dist/scripts_min'));
});

gulp.task('scripts', () => {
  return gulp.src('source/app/scripts/*.js')
    .pipe(gulp.dest('source/dist/scripts'))
});

gulp.task('html', ['styles-dist', 'scripts'], () => {
  const assets = $.useref.assets({searchPath: ['app', '.']});

  return gulp.src('source/app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('source/dist'));
});

gulp.task('images', () => {
  return gulp.src('source/app/images/**/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('source/dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src('source/app/fonts/*')
    .pipe(gulp.dest('source/dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'source/app/*.*',
    '!source/app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['source/dist']));

gulp.task('serve', ['style'], () => {
  browserSync({
    open: false,
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'source/app']
    }
  });

  gulp.watch([
    'source/app/*.html',
    'source/app/scripts/**/*.js',
    'source/app/images/**/*',
    'source/app/fonts/**/*',
  ]).on('change', reload);

  gulp.watch('source/app/styles/**/*.scss', ['style', reload]);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['source/dist']
    }
  });
});

gulp.task('build', ['html', 'images', 'fonts', 'minify-css', 'minify-js', 'extras'], () => {
  return gulp.src('source/dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
