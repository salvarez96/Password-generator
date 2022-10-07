const showPasswordLength = document.querySelector('.password-length--show');
const passwordLengthSlider = document.querySelector('.password-length-slider');

showPasswordLength.innerText = passwordLengthSlider.value;
passwordLengthSlider.addEventListener('input', () => {
  showPasswordLength.innerText = passwordLengthSlider.value;
});

export {showPasswordLength, passwordLengthSlider};