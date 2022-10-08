import { randomPassword, copyPassword } from "./main.js";

const getElements = (idOrClass) => document.querySelector(idOrClass);

const showPasswordLength = getElements('.length-container__text--num-value');
const passwordLengthSlider = getElements('.length-container__slider');
const passwordText = getElements('.password-container__text');
const passwordCopyButton = getElements('.password-container__copy');
const generateButton = getElements('#generate-password');
const clipboardText = getElements('.password-container__text--hidden');

showPasswordLength.innerText = passwordLengthSlider.value;

let passwordLength = passwordLengthSlider.value;
passwordLengthSlider.addEventListener('input', () => {
  showPasswordLength.innerText = passwordLengthSlider.value;
  passwordLength = passwordLengthSlider.value;
});

randomPassword(passwordLength);

generateButton.addEventListener('click', () => randomPassword(passwordLength));

passwordCopyButton.addEventListener('click', () => copyPassword());

export {passwordText, clipboardText};