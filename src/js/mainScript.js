const banner = document.querySelector('.banner');
const bannerBackgorundItems = document.querySelectorAll('.banner__background-item');
const accordion = document.querySelector('.included__accordion');
const shiftFactor = 50;
const accordionData = [
  {
    title: 'Дизайн портала',
    text: 'Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.',
  },
  {
    title: 'Дизайн адаптивной мобильной версии ',
    text: 'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.',
  },
  {
    title: 'Дизайн десктопной версии',
    text: 'Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.',
  },
  {
    title: 'Пользовательский интерфейс',
    text: 'Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.',
  },
  {
    title: 'Микро UX',
    text: 'Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.',
  },
];
const bag = document.querySelector('.included__bag');
accordionData.forEach(item => {
  const acordionItem = document.createElement('div');
  acordionItem.innerHTML = `
            <div class="accordion__item">
              <div class="accordion__name">
                <div class="accordion__info">
                  <div class="accordion__indicator"></div>
                  <p class="accordion__title">${item.title}</p>
                </div>
                <img class="accordion__arrow" src="./dist/img/slider-arrow.svg" alt="arrow" />
              </div>
              <div class="panel">
                <p class="panel__text">
                ${item.text}
                </p>
              </div>
            </div>
  `;
  accordion.appendChild(acordionItem);
});

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(name => {
  name.addEventListener('click', e => {
    console.log(e.target.classList.toggle('open'));
  });
});

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
  moveItem(bannerBackgorundItems, x, y);
  moveItem(bag, x, y);
});

function moveItem(items, x, y) {
  if (!items.length) {
    items.style = `transform: translate(${-x / 2}px,${-y / 2}px)`;
    return;
  }
  items.forEach(item => {
    const distance = item.dataset.distance;
    const reverse = item.dataset.reverse;
    item.style = reverse
      ? `transform: scaleX(-1) translate(${-x / distance}px,${y / distance}px)`
      : `transform: translate(${x / distance}px,${y / distance}px)`;
  });
}
