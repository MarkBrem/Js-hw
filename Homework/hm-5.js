console.log('Домашня робота 5');

const select = "Кава";
let drink

switch (select) {
    case "Кава":
        drink = "Кава";
        console.log(`Ви вибрали напій: ${drink}`);
        break;
    case "Чай":
        drink = "Чай";
        console.log(`Ви вибрали напій: ${drink}`);
        break;
    case "Сік":
        drink = "Сік";
        console.log(`Ви вибрали напій: ${drink}`);
        break;
    default:
        console.log(`Токого напою немає`)
        break;
}

const day = prompt();
let answer

switch (day) {
    case "Понеділок":
        answer = "Понеділок";
        console.log(`День: ${answer}`);
        break;
    case "Вівторок":
        answer = "Вівторок";
        console.log(`День: ${answer}`);
        break;
    case "Середа":
        answer = "Середа";
        console.log(`День: ${answer}`);
        break;
    case "Четвер":
        answer = "Четвер";
        console.log(`День: ${answer}`);
        break;
    case "П'ятниця":
        answer = "П'ятниця";
        console.log(`День: ${answer}`);
        break;
    case "Субота":
        answer = "Субота";
        console.log(`День: ${answer}`);
        break;
    case "Неділя":
        answer = "Неділя";
        console.log(`День: ${answer}`);
        break;
    default:
        console.log(`Токого дня немає`)
        break;
}

const month = 5;
let answer1

switch (month) {
    case 12, 1, 2:
        answer1 = "Зима";
        console.log(`Пора року: ${answer1}`);
        break;
    case 3, 4, 5:
        answer1 = "Весна";
        console.log(`Пора року: ${answer1}`);
        break;
    case 6, 7, 8:
        answer1 = "Літо";
        console.log(`Пора року: ${answer1}`);
        break;
    case 9, 10, 11:
        answer1 = "Весна";
        console.log(`Пора року: ${answer1}`);
        break;
    default:
        console.log(`Токої пори року немає`)
        break;
}

const month2 = 2;
let answer2

switch (month2) {
    case 1,3,5,7,9,11:
        answer2 = "31";
        console.log(`Кількість днів: ${answer2}`);
        break;
    case 4,6,8,10:
        answer2 = 30;
        console.log(`Кількість днів: ${answer2}`);
        break;
    case 2:
        answer2 = 28;
        console.log(`Кількість днів: ${answer2}`);
        break;
    default:
        console.log(`Немає такого місяця`)
        break;
}

const color = "червоний";
let answer3

switch (color) {
    case "червоний":
        answer3 = "стоп";
        console.log(`${answer3}`);
        break;
    case "зелений":
        answer3 = "йти";
        console.log(`${answer3}`);
        break;
    case "жовтий":
        answer3 = "чекати";
        console.log(`${answer3}`);
        break;
    default:
        console.log(`Немає такого кольору`)
        break;
}

const num1 = 5
const num2 = 6
const action = prompt(`Напишіть дію`)
let answer4

switch (action) {
    case "+":
        answer4 = num1 + num2
        console.log(answer4);
        break
    case "-":
        answer4 = num1 - num2
        console.log(answer4);
        break
    case "*":
        answer4 = num1 * num2
        console.log(answer4);
        break
    case "/":
        answer4 = num1 / num2
        console.log(answer4);
        break
    default:
        console.log(`Немає такої дії`)
        break;
}