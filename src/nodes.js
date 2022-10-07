const showPasswordLength = document.querySelector('.length-container__text--num-value');
const passwordLengthSlider = document.querySelector('.length-container__slider');

showPasswordLength.innerText = passwordLengthSlider.value;
passwordLengthSlider.addEventListener('input', () => {
  showPasswordLength.innerText = passwordLengthSlider.value;
});

export {showPasswordLength, passwordLengthSlider};