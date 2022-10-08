import {passwordText} from './nodes.js';

let letters = 'abcdefghijklmnopqrstuvwxyz';
letters += letters.toUpperCase() + '1234567890';

const symbols = '!#$%&/()[].,;<>?¿¡+*-=';

const randomPassword = (passwordLength) => {
  const minLength = 6;
  const randomNumArr = [];
  let randomNum = 0;
  if(passwordLength >= minLength){
    for(let i = 0; i < passwordLength; i++){
      randomNum = Math.floor(Math.random() * (letters.length));
      randomNumArr.push(letters[randomNum]);
    }
    console.log(randomNumArr);
    passwordText.innerText = randomNumArr.join('');
  } else {
    return 'Your password should be at least 6 characters long';
  }
}

export {randomPassword}