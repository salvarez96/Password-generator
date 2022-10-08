import { randomPassword } from "./main.js";

const getElements = (idOrClass) => document.querySelector(idOrClass);

const showPasswordLength = getElements('.length-container__text--num-value');
const passwordLengthSlider = getElements('.length-container__slider');
const passwordText = getElements('.password-container__text');
const passwordCopy = getElements('.password-container__copy');
const generateButton = getElements('#generate-password');

showPasswordLength.innerText = passwordLengthSlider.value;

let passwordLength = passwordLengthSlider.value;
passwordLengthSlider.addEventListener('input', () => {
  showPasswordLength.innerText = passwordLengthSlider.value;
  passwordLength = passwordLengthSlider.value;
});

document.addEventListener('DOMContentLoaded', randomPassword(passwordLength));

generateButton.addEventListener('click', () => randomPassword(passwordLength));

export {showPasswordLength, passwordLengthSlider, passwordCopy, passwordText, generateButton, passwordLength};