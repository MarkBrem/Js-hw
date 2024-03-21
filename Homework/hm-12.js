console.log('Домашня робота 12');

const user = {
  name: 'John',
  age: 30,
  hobby: 'football',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

const countProps = obj => Object.keys(obj).length;


const findBestEmployee = employees => {
  let maxTasks = 0;
  let bestEmployee = '';
  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};


const countTotalSalary = employees => {
  let totalSalary = 0;
  for (const employee in employees) {
    totalSalary += employees[employee];
  }
  return totalSalary;
};

const getAllPropValues = (arr, prop) => arr.map(obj => obj[prop]);

const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }
  return totalPrice;
};

console.log(countProps({ a: 1, b: 2, c: 3 })); // 3
console.log(findBestEmployee({ John: 5, Jane: 7, Bob: 4 })); // 'Jane'
console.log(countTotalSalary({ John: 1000, Jane: 1500, Bob: 1200 })); // 3700
console.log(getAllPropValues([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }], 'a')); // [1, 3, 5]
console.log(calculateTotalPrice([{ name: 'bread', price: 2, quantity: 5 }, { name: 'milk', price: 1, quantity: 3 }], 'bread')); // 10