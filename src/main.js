import {showPasswordLength, passwordLengthSlider} from './nodes.js';

let letters = 'abcdefghijklmnopqrstuvwxyz';
letters += letters.toUpperCase();
letters += '1234567890';

const symbols = '!#$%&/()[].,;<>?¿¡+*-=';

// const allCharactersArr = letters.split('')
// console.log(allCharactersArr);

const randomPassword = (passwordLength) => {
  //minimun password length = 6
  const minLength = 6;
  const randomNumArr = [];
  let randomNum = 0;
  if(passwordLength >= minLength){
    for(let i = 0; i < passwordLength; i++){
      randomNum = Math.floor(Math.random() * (letters.length));
      randomNumArr.push(letters[randomNum]);
    }

    console.log(randomNumArr);
    return randomNumArr.join('');
  } else {
    return 'Your password should be at least 6 characters long';
  }
}

console.log(randomPassword(6));