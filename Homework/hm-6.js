console.log('Домашня робота 6');

let answer = 0
while (answer < 10) {
    answer += 1
    console.log(answer);
}


for (let number = 2; number <= 20; number += 1) {
  if (number % 2 !== 0) {
    continue;
  }
  console.log(number);
}

for (let i = 1; i <= 10; i += 1) {
  let result = 7 * i;
  console.log(`7 * ${i} = ${result}`);
}

let numbers = [1, 2, 3, 4, 5];
let number = 0;
while (i < numbers.length) {
  console.log(numbers[number]);
  i += 1;
}

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] === 7) {
    break;
  }
  console.log(numbers[i]);
}

let n = 10;

for (let i = 0; i < n; i += 1) {
  console.log(i);
  if (i >= n - 1) {
    break;
  }
}

let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}