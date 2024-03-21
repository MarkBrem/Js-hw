console.log('Домашня робота 11');

const bankAccount = {
  ownerName: "",
  accountNumber: "",
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
    console.log(`Операция выполнена. Баланс: ${this.balance}`);
  },
  withdraw: function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Операция выполнена. Баланс: ${this.balance}`);
    } else {
      console.log('Недостаточно средств на счету');
    }
  }
};


bankAccount.deposit(100); 
bankAccount.withdraw(30); 

const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  isBelowZero: function() {
    return this.temperature < 0;
  }
};


const inputTemperature =  ''
weather.temperature = inputTemperature;

if (weather.isBelowZero()) {
  console.log('Температура ниже 0 градусов Цельсия');
} else {
  console.log('Температура выше или равна 0 градусов Цельсия');
}

const user = {
  name: "",
  email: "",
  password: "",
  login: function(inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      console.log('Вход выполнен успешно');
    } else {
      console.log('Неправильный email или пароль');
    }
  }
};


const inputEmail =  ''
const inputPassword =  ''
user.login(inputEmail, inputPassword);

const movie = {
  title: "",
  director: "",
  year: "",
  rating: 0,
  isRatingAbove8: function() {
    return this.rating > 8;
  }
};

const titleElement =  ''
titleElement.textContent = movie.title;
if (movie.isRatingAbove8()) {
  titleElement.style.color = 'green';
}