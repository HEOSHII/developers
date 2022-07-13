const banner = document.querySelector('.banner');
const bannerBackgorundItems = document.querySelectorAll('.banner-background-item');
let x, y;
window.addEventListener('mousemove', e => {
  console.log(window.innerWidth);
  if (e.clientX > window.innerWidth / 2) {
    x = (e.clientX - window.innerWidth / 2) / 50;
  } else {
    x = -(window.innerWidth / 2 - e.clientX) / 50;
  }
  if (e.clientY > window.innerHeight / 2) {
    y = (e.clientY - window.innerHeight / 2) / 50;
  } else {
    y = -(window.innerHeight / 2 - e.clientY) / 50;
  }
  moveItem(bannerBackgorundItems, x, y);
});

function moveItem(items, x, y) {
  items.forEach(item => {
    const distance = item.dataset.distance;
    if (distance) {
      console.log(distance);
      item.style = `transform: translate(${x / distance}px,${y / distance}px)`;
    } else {
      item.style = `transform: translate(${x}px,${y}px)`;
    }
  });
}
