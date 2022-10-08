import {passwordText, clipboardText} from './nodes.js';

let letters = 'abcdefghijklmnopqrstuvwxyz';
letters += letters.toUpperCase() + '1234567890';

// const symbols = '!#$%&/()[].,;<>?¿¡+*-=';

const randomPassword = (passwordLength) => {
  const randomNumArr = [];
  let randomNum = 0;

  for(let i = 0; i < passwordLength; i++){
    randomNum = Math.floor(Math.random() * (letters.length));
    randomNumArr.push(letters[randomNum]);
  }

  console.log(randomNumArr);
  passwordText.innerText = randomNumArr.join('');
  clipboardText.value = randomNumArr.join('');
}

const copyPassword = () => {
  clipboardText.select();
  clipboardText.setSelectionRange(0, clipboardText.innerText.length);
  navigator.clipboard.writeText(clipboardText.value);
  console.log(`Copied ${clipboardText.value} succesfully in clipboard`);
}

export {randomPassword, copyPassword}