const banner = document.querySelector('.banner');
const bannerContent = document.querySelector('.banner__content');
const accordeon = document.querySelector('.included__accordeon');
const shiftFactor = 50;
const bannerBackgroundItems = [
  {
    name: 'blue-sphere',
    src: './dist/img/blue-sphere.svg',
    class: 'banner__blue-sphere-1',
    distance: 3,
  },
  {
    name: 'blue-sphere',
    src: './dist/img/blue-sphere.svg',
    class: 'banner__blue-sphere-2',
    distance: 5,
  },
  {
    name: 'purple-sphere',
    src: './dist/img/purple-sphere.svg',
    class: 'banner__purple-sphere',
    distance: 8,
  },
  {
    name: 'blue-cylinder',
    src: './dist/img/blue-cylinder.svg',
    class: 'banner__blue-cylinder',
    distance: 4,
  },
  {
    name: 'blue-wave',
    src: './dist/img/blue-wave.svg',
    class: 'banner__blue-wave',
    distance: 6,
  },
  {
    name: 'purple-wave',
    src: './dist/img/purple-wave.svg',
    class: 'banner__purple-wave-1',
    distance: 3,
  },
  {
    name: 'purple-wave',
    src: './dist/img/purple-wave.svg',
    class: 'banner__purple-wave-2',
    distance: 0.7,
  },
  {
    name: 'blured-cylinder',
    src: './dist/img/blured-cylinder.svg',
    class: 'banner__blured-cylinder',
    distance: 10,
  },
];
const accordeonData = [
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
