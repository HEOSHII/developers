import imagemin from 'gulp-imagemin';

const images = () => {
  return app.gulp
    .src(app.paths.images.src)
    .pipe(imagemin())
    .pipe(app.gulp.dest(app.paths.images.dest));
};

export default images;
