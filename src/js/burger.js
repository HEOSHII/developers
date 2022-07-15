const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
burger.onclick = () => {
  document.body.classList.toggle('menu-opened');
};
