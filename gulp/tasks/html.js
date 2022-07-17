import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

const options = {
  removeComments: true,
  collapseWhitespace: true,
};

export default function () {
  return app.gulp
    .src(app.paths.html.src)
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, './img/'))
    .pipe(htmlmin(options))
    .pipe(app.gulp.dest(app.paths.html.dest));
}
