import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

const scripts = () => {
  return app.gulp
    .src(app.paths.scripts.src, {
      sourcemaps: true,
    })
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(app.gulp.dest(app.paths.scripts.dest));
};

export default scripts;
