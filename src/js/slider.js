const sliderItems = slider.querySelectorAll('.dev-steps__slider-item');
const stepSize = sliderItems[0].clientWidth + 28; //28px is gap
let currentStep = 0;
sliderNextButton.addEventListener('click', () => {
  currentStep = currentStep === sliderItems.length - 1 ? 0 : currentStep + 1;
  moveSlider(currentStep);
});

sliderPrevButton.addEventListener('click', () => {
  currentStep = currentStep === 0 ? sliderItems.length - 1 : currentStep - 1;
  moveSlider(currentStep);
});

function moveSlider(current) {
  slider.style = `left: -${stepSize * current}px`;
}
