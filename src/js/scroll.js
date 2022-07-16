const offsetTop = {
  included: document.querySelector('.included').offsetTop,
  devSteps: document.querySelector('.dev-steps').offsetTop,
  examples: document.querySelector('.examples').offsetTop,
  moreInfo: document.querySelector('.footer').offsetTop,
};

const links = {
  devSteps: document.querySelector('.steps-link'),
  examples: document.querySelector('.examples-link'),
  included: document.querySelector('.included-link'),
};

const headerList = document.querySelector('.header__list');

window.onscroll = function () {
  const scrolled = this.pageYOffset - 10;
  scrolled >= offsetTop.included && scrolled < offsetTop.devSteps
    ? links.included.classList.add('active')
    : links.included.classList.remove('active');

  scrolled >= offsetTop.devSteps && scrolled < offsetTop.examples
    ? links.devSteps.classList.add('active')
    : links.devSteps.classList.remove('active');

  scrolled >= offsetTop.examples && scrolled < offsetTop.moreInfo
    ? links.examples.classList.add('active')
    : links.examples.classList.remove('active');
};
