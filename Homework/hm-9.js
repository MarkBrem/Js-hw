console.log('Домашня робота 9');

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    
    console.log(`${i + 1} - ${array[i]}`);
  }
};


logItems(['Mango', 'Poly', 'Ajax']);


const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' '); 
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

const checkForSpam = function(message) {
  const normalizedMessage = message.toLowerCase(); 
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
};

console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing Spam for you'));

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введіть число');
  if (input !== null) {
    if (!isNaN(input)) {
      numbers.push(Number(input));
    } else {
      alert('Було введено не число, попробуйте ще раз');
    }
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};


const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login); 
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін вже використовується!';
  }
  allLogins.push(login);
  return 'Логін успішно доданий!';
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));