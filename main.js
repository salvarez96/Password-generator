let letters = 'abcdefghijklmnopqrstuvwxyz'
letters += letters.toUpperCase()

console.log(letters)

const symbols = '!#$%&/()[].,;<>?¿¡+*-='

letters += '1234567890'
const allCharactersArr = letters.split('')
console.log(allCharactersArr);

const randomPassword = (passWordLength) => {
  //minimun password length = 6
  const minLength = 6;
  const randomNumArr = [];
  let randomNum = 0;
  if(passWordLength >= minLength){
    for(let i = 0; i < passWordLength; i++){
      randomNum = Math.floor(Math.random() * (allCharactersArr.length));
      randomNumArr.push(allCharactersArr[randomNum]);
    }

    console.log(randomNumArr)
    return randomNumArr.join('')
  } else {
    return 'Your password should be at least 6 characters long';
  }
}

console.log(randomPassword(6));