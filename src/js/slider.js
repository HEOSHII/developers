const sliderItems = slider.querySelectorAll('.dev-steps__slider-item');
const stepSize = sliderItems[0].clientWidth + 28; //28px is gap
sliderNextButton.addEventListener('click', () => {
  if (currentStep === sliderItems.length - 1) {
    return;
  }
  currentStep++;
  slider.style = `left: -${stepSize * currentStep}px`;
});

sliderPrevButton.addEventListener('click', () => {
  if (currentStep === 0) {
    return;
  }
  currentStep--;
  slider.style = `left: -${stepSize * currentStep}px`;
});