import browserSync from 'browser-sync';

export default function () {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    browser: 'google chrome',
  });
  app.gulp.watch(app.paths.scripts.src, task.move.scripts);
  app.gulp.watch(app.paths.images.src, task.move.images);
  app.gulp.watch(app.paths.styles.src, task.move.styles);
  app.gulp.watch(app.paths.html.watch, task.move.html);
  app.gulp.watch('./dist', task.reload);
}
