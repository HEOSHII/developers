import gulp from 'gulp';
import paths from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';
import cleanDist from './gulp/tasks/cleanDist.js';
import styles from './gulp/tasks/styles.js';
import images from './gulp/tasks/images.js';
import scripts from './gulp/tasks/scripts.js';
import html from './gulp/tasks/html.js';
import watch from './gulp/tasks/watch.js';
import reload from './gulp/tasks/reload.js';

global.app = {
  gulp,
  paths,
  plugins,
};

global.task = {
  move: {
    styles,
    images,
    scripts,
    html,
  },
  reload,
};

const mainTasks = gulp.parallel(styles, images, scripts, html);
gulp.task('build', gulp.series(cleanDist, mainTasks));
gulp.task('watch', gulp.series('build', watch));
