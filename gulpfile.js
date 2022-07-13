const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/',
  },
  images: {
    src: 'src/img/*',
    dest: 'dist/img/',
  },
};

function cleanDist() {
  return del(['dist']);
}

function scripts() {
  return gulp
    .src(paths.scripts.src, {
      sourcemaps: true,
    })
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(concat('mainScript.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function img() {
  return gulp.src(paths.images.src).pipe(imagemin()).pipe(gulp.dest(paths.images.dest));
}

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
      cleanCss({
        level: 2,
      }),
    )
    .pipe(
      rename({
        basename: 'style',
        suffix: '.min',
      }),
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
}

const build = gulp.series(cleanDist, gulp.parallel(styles, scripts, img), watch);

function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, img);
}

exports.cleanDist = cleanDist;
exports.img = img;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
