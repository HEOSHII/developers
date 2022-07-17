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
  html: {
    src: 'src/html/pages/*.html',
    dest: 'dist/',
    watch: 'src/**/*.html',
  },
};

export default paths;
