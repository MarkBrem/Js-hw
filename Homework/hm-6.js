console.log('Домашня робота 6');

console.log(`1 завдання`);
const textA = 'Hello!';
const textB = '';

if (textA.length > 0 && textB > 0) {
    console.log(`Всі поля заповнені`);
} else {
    console.log(`Не всі поля заповнені`)
};

console.log(`2 завдання`);
const numberA = 7;
const numberB = 4;

if (numberA + numberB > 10) {
    console.log(`Сума більша від 10`);
} else {
    console.log(`Сума менша або дорівнює 10`)
}

console.log(`3 завдання`);
const message = 'javascript';
const equeMessage = 'JavaScript';

if (message === equeMessage) {
    console.log(`Текст містить слово JavaScript`);
} else {
    console.log(`Текст не містить слово JavaScript`);
}

console.log(`4 завдання`);

const number = 17;

if (number > 10 && number < 20) {
    console.log(`Число входить в діапазон від 10 до 20`);
} else {
    console.log(`Число не входить в діапазон від 10 до 20`);
}

console.log(`5 завдання`);

const name = 'Marko';
const email = 'mgusanica@.gamil.com';
const password = '12345678';

if (name.lenth > 3 && email.includes('@') && email.includes('@.') && password.length > 6) {
    console.log(`Ви успішно авторизувалися`);
} else {
    console.log(`Помилка. Спробуйте ще`);
}