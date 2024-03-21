console.log('Домашня робота 13');

const user = {
  name: 'John',
  age: 30,
  hobby: 'football',
  premium: true,
};

const { mood = 'happy', hobby, premium, ...rest } = user;
const updatedUser = { mood, hobby: 'skydiving', premium: false, ...rest };

for (const [key, value] of Object.entries(updatedUser)) {
  console.log(`${key}: ${value}`);
}

// Завдання 2
const countProps = obj => Object.keys(obj).length;

// Завдання 3
const findBestEmployee = employees => {
  let maxTasks = 0;
  let bestEmployee = '';
  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

// Завдання 4
const countTotalSalary = employees => {
  let totalSalary = 0;
  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }
  return totalSalary;
};

// Завдання 5
const getAllPropValues = (arr, prop) => arr.map(obj => obj[prop]);

// Завдання 6
const calculateTotalPrice = (allProducts, productName) => {
  const { price, quantity } = allProducts.find(product => product.name === productName);
  return price * quantity;
};

// Виклик функцій для перевірки
console.log(countProps({ a: 1, b: 2, c: 3 })); // 3
console.log(findBestEmployee({ John: 5, Jane: 7, Bob: 4 })); // 'Jane'
console.log(countTotalSalary({ John: 1000, Jane: 1500, Bob: 1200 })); // 3700
console.log(getAllPropValues([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }], 'a')); // [1, 3, 5]
console.log(calculateTotalPrice([{ name: 'bread', price: 2, quantity: 5 }, { name: 'milk', price: 1, quantity: 3 }], 'bread')); // 10