console.log('Домашня робота 7');

let numbersArray1 = [1, 2, 3];
numbersArray1[1] = 10;

let stringsArray = ["Рядок 1", "Рядок 2", "Рядок 3"];
stringsArray.push("Ще один рядок");

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

let numbersArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray2.length; i++) {
  console.log(numbersArray2[i]);
}   

let stringsArr = ["Рядок 1", "Рядок 2", "Тривалий рядок 3", "Інший рядок", "Ще один"];
for (let i = 0; i < stringsArr.length; i++) {
  if (stringsArr[i].length > 5) {
    console.log(stringsArr[i]);
  }
}

let numbersArray3 = [5, 8, 2, 10, 15, 3, 7, 21, 6, 12];
let max = Math.max(...numbersArray3);
console.log(max);

let numbersArray4 = [5, 8, 2, 10, 15, 3, 7, 21, 6, 12];
for (let i = 0; i < numbersArray4.length; i++) {
  if (numbersArray4[i] % 2 === 0) {
    console.log(numbersArray4[i]);
  }
}