import browserSync from 'browser-sync';

export default function (done) {
  browserSync.reload();
  done();
}
