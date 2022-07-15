const sliderItems = slider.querySelectorAll('.dev-steps__slider-item');

let currentStep = 0;
sliderNextButton.addEventListener('click', () => {
  const stepSize = sliderItems[0].clientWidth + 28; //28px is a gap
  currentStep = currentStep === sliderItems.length - 1 ? 0 : currentStep + 1;
  moveSlider(currentStep, stepSize);
});

sliderPrevButton.addEventListener('click', () => {
  const stepSize = sliderItems[0].clientWidth + 28; //28px is a gap
  currentStep = currentStep === 0 ? sliderItems.length - 1 : currentStep - 1;
  moveSlider(currentStep, stepSize);
});

function moveSlider(current, size) {
  slider.style = `left: -${size * current}px`;
}

let shop = 0;
shopsNextButton.onclick = () => {
  if (shop === 1) {
    examples.style = 'transform: translateX(0)';
    shop = 0;
  } else {
    examples.style = 'transform: translateX(-100vw)';
    shop++;
  }
};
shopsPrevButton.onclick = () => {
  if (shop === 0) {
    examples.style = 'transform: translateX(-100vw)';
    shop = 1;
  } else {
    examples.style = 'transform: translateX(0)';
    shop--;
  }
};
