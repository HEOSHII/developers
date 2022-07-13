const banner = document.querySelector('.banner');
const bannerBackgorundItems = document.querySelectorAll('.banner__background-item');

window.addEventListener('mousemove', event => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const mouseMoveX = event.clientX;
  const mouseMoveY = event.clientY;
  const shiftFactor = 50;
  const x =
    mouseMoveX > centerX
      ? (mouseMoveX - centerX) / shiftFactor
      : -(centerX - mouseMoveX) / shiftFactor;
  const y =
    mouseMoveY > centerY
      ? (mouseMoveY - centerY) / shiftFactor
      : -(centerY - mouseMoveY) / shiftFactor;
  moveItem(bannerBackgorundItems, x, y);
});

function moveItem(items, x, y) {
  items.forEach(item => {
    const distance = item.dataset.distance;
    const reverse = item.dataset.reverse;
    item.style = reverse
      ? `transform: scaleX(-1) translate(${-x / distance}px,${y / distance}px)`
      : `transform: translate(${x / distance}px,${y / distance}px)`;
  });
}
