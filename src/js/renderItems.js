//CREATE BACKGROUND IMAGES FOR BANNER
renderData.bannerBackgroundImages.forEach(item => {
  const image = document.createElement('img');
  image.className = `background-item banner__background-item ${item.class}`;
  image.setAttribute('data-distance', item.distance);
  image.setAttribute('alt', item.name);
  image.src = item.src;
  banner.appendChild(image);
});

//CREATE ACCORDEON ITEMS
renderData.accordeon.forEach(item => {
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
accordeonItems.forEach(item => {
  item.addEventListener('click', event => {
    event.target.classList.toggle('open');
  });
});

//CREATE SLIDER ITEMS
renderData.slider.forEach((item, index) => {
  const sliderItem = document.createElement('div');
  sliderItem.className = 'dev-steps__slider-item';
  sliderItem.innerHTML = `
    <div class="slider__text">
      <h3 class="slider__title">${index + 1}. ${item.title}</h3>
      <p class="slider__main">
        ${item.text}
      </p>
    </div>
    <div class="slider__image">
      <img src="${item.image}" />
    </div>`;
  slider.appendChild(sliderItem);
});

//CREATE EXAPLES ITEMS
renderData.examples.forEach(item => {
  const shop = document.createElement('div');
  shop.className = 'examples__item';
  shop.innerHTML = `
  <img class="examples__image" src="${item.image}" alt="shop" />
  <div class="examples__description">
    <h3 class="examples__name">${item.name}</h3>
    <p class="examples__info">${item.info}</p>
  </div>`;
  examples.appendChild(shop);
});

//CREATE MORE-INFO ITEMS
renderData.moreInfoBackgroundImages.forEach(item => {
  const image = document.createElement('img');
  image.className = `background-item ${item.class}`;
  image.src = item.src;
  image.dataset.distance = item.distance;
  image.setAttribute('alt', item.name);
  moreInfo.appendChild(image);
  console.log(item.distance);
});
