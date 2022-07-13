//CREATE BACKGROUND IMAGES FOR BANNER
bannerBackgroundItems.forEach(item => {
  const image = document.createElement('img');
  image.className = `banner__background-item ${item.class}`;
  image.setAttribute('data-distance', item.distance);
  image.setAttribute('alt', item.name);
  image.src = item.src;
  bannerContent.appendChild(image);
});

//GET ALL BACKGROUND IMAGES OF  BANNER
const bannerBackgorundItems = document.querySelectorAll('.banner__background-item');

//CREATE ACCORDEON ITEMS
accordeonData.forEach(item => {
  const acordionItem = document.createElement('div');
  acordionItem.innerHTML = `
            <div class="accordeon__item">
              <div class="accordeon__name">
                <div class="accordeon__info">
                  <div class="accordeon__indicator"></div>
                  <p class="accordeon__title">${item.title}</p>
                </div>
                <img class="accordeon__arrow" src="./dist/img/slider-arrow.svg" alt="arrow" />
              </div>
              <div class="panel">
                <p class="panel__text">
                ${item.text}
                </p>
              </div>
            </div>
  `;
  accordeon.appendChild(acordionItem);
});

const accordeonItems = document.querySelectorAll('.accordeon__item');
accordeonItems.forEach(name => {
  name.addEventListener('click', event => {
    event.target.classList.toggle('open');
  });
});

//LISTENER FOR PARALAX EFFECT
window.addEventListener('mousemove', event => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const mouseMoveX = event.clientX;
  const mouseMoveY = event.clientY;
  const x =
    mouseMoveX > centerX
      ? (mouseMoveX - centerX) / shiftFactor
      : -(centerX - mouseMoveX) / shiftFactor;
  const y =
    mouseMoveY > centerY
      ? (mouseMoveY - centerY) / shiftFactor
      : -(centerY - mouseMoveY) / shiftFactor;
  moveItems([...bannerBackgorundItems, bag], x, y);
});

function moveItems(items, x, y) {
  items.forEach(item => {
    const distance = item.dataset.distance || 4;
    const reverse = item.dataset.reverse;
    item.style = reverse
      ? `transform: scaleX(-1) translate(${-x / distance}px,${y / distance}px)`
      : `transform: translate(${x / distance}px,${y / distance}px)`;
  });
}
