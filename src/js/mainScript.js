//LISTENER FOR PARALAX EFFECT
window.addEventListener('mousemove', event => {
  const positions = {
    x: {
      mouse: event.clientX,
      center: window.innerWidth / 2,
    },
    y: {
      mouse: event.clientY,
      center: window.innerHeight / 2,
    },
  };
  const move = {
    x: getCoord(positions.x.mouse, positions.x.center),
    y: getCoord(positions.y.mouse, positions.y.center),
  };
  //GET ALL BACKGROUND IMAGES
  const allBackgorundItems = document.querySelectorAll('.background-item');
  window.innerWidth > 768 ? moveItems(allBackgorundItems, move.x, move.y) : null;
});

const getCoord = (mouse, center) =>
  mouse > center ? (mouse - center) / shiftFactor : -(center - mouse) / shiftFactor;

const moveItems = (items, x, y) => {
  items.forEach(item => {
    const distance = Number(item.dataset.distance) || 1;
    item.style = `transform: translate(${x / distance}px,${y / distance}px)`;
  });
};

const menuLinks = document.querySelectorAll('.header__link');
menuLinks.forEach(link => {
  link.onclick = () => document.body.classList.remove('menu-opened');
});



