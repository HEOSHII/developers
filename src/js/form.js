formButton.classList.add('invalid');

feedbackInputs.forEach(input => {
  input.addEventListener('input', event => {
    isAllValid() ? formButton.classList.remove('invalid') : formButton.classList.add('invalid');
  });
});

form.onsubmit = event => {
  event.preventDefault();
  const result = {};
  const formData = new FormData(form);
  for (const item of formData.entries()) {
    result[item[0]] = item[1];
  }
  console.log('Your entries: ', result);
};

function isAllValid() {
  let countvalid = 0;
  const inputs = document.querySelectorAll('.feedback__input');
  inputs.forEach(input => {
    countvalid = input.validity.valid ? countvalid + 1 : countvalid;
  });
  return countvalid === 3;
}
