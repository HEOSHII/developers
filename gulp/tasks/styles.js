import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const styles = () => {
  return app.gulp
    .src(app.paths.styles.src)
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
    .pipe(app.gulp.dest(app.paths.styles.dest));
};

export default styles;
