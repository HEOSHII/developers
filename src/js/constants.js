const banner = document.querySelector('.banner__content');
const accordeon = document.querySelector('.included__accordeon');
const slider = document.querySelector('.dev-steps__slider');
const examples = document.querySelector('.examples__shops');
const moreInfo = document.querySelector('.more-info__image');

const shiftFactor = 35; //shift of moving background items

const renderData = {
  bannerBackgroundImages: [
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
      src: './dist/img/purple-wave-reverse.svg',
      class: 'banner__purple-wave-2',
      distance: 0.7,
    },
    {
      name: 'blured-cylinder',
      src: './dist/img/blured-cylinder.svg',
      class: 'banner__blured-cylinder',
      distance: 10,
    },
  ],
  moreInfoBackgroundImages: [
    {
      name: 'pink-sphere',
      src: './dist/img/pink-sphere.svg',
      class: 'more-info__pink-sphere',
      distance: 2,
    },

    {
      name: 'blue-sphere',
      src: './dist/img/blue-sphere.svg',
      class: 'more-info__blue-sphere',
      distance: 5,
    },

    {
      name: 'watches',
      src: './dist/img/watches.svg',
      class: 'more-info__watches',
      distance: 0.8,
    },

    {
      name: 'blured-cylinder',
      src: './dist/img/blured-cylinder-reverse.svg',
      class: 'more-info__blured-cylinder',
      distance: 0.3,
    },
    {
      name: 'blured--pink-wave',
      src: './dist/img/blured--pink-wave.svg',
      class: 'more-info__blured--pink-wave',
      distance: 7,
    },
    {
      name: 'taper',
      src: './dist/img/taper.svg',
      class: 'more-info__taper',
      distance: 3,
    },
  ],
  accordeon: [
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
  ],
  slider: [
    {
      title: 'Анализ',
      text: 'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.',
      image: './dist/img/cell.png',
      alt: 'cell',
    },

    {
      title: 'Визуальное решение',
      text: 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.',
      image: './dist/img/cake.png',
      alt: 'cake',
    },

    {
      title: 'Техническая реализация',
      text: 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.',
      image: './dist/img/scan-barcode.png',
      alt: 'scanner',
    },

    {
      title: 'Наполнение контентом ',
      text: 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ',
      image: './dist/img/content-addition.png',
      alt: 'content-addition',
    },

    {
      title: 'Тестирование',
      text: 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
      image: './dist/img/testing.png',
      alt: 'testing',
    },
  ],
  examples: [
    { name: 'Онлайн-магазин', info: 'для оптовых покупок', image: './dist/img/shop-1.jpeg' },
    { name: 'Онлайн-магазин', info: 'для флористов', image: './dist/img/shop-2.jpeg' },
    { name: 'Онлайн-магазин', info: 'для парикмахеров', image: './dist/img/shop-3.jpeg' },
    { name: 'Онлайн-магазин', info: 'для визажистов', image: './dist/img/shop-4.jpeg' },
    { name: 'Онлайн-магазин', info: 'для кондитеров', image: './dist/img/shop-5.jpeg' },
    { name: 'Онлайн-магазин', info: 'для художников', image: './dist/img/shop-6.jpeg' },
  ],
};

const sliderNextButton = document.querySelector('.next');
const sliderPrevButton = document.querySelector('.prev');
let currentStep = 0;
