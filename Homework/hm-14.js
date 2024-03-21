console.log('Домашня робота 14');

const users = [
  { name: 'Іван', eyeColor: 'сині', gender: 'чоловіча', isActive: true, email: 'ivan@example.com', age: 25 },
  { name: 'Марія', eyeColor: 'зелені', gender: 'жіноча', isActive: false, email: 'maria@example.com', age: 30 },
];

const userNames = users.map(user => user.name);

const usersByEyeColor = users.filter(user => user.eyeColor === 'сині');

const userNamesByGender = users.filter(user => user.gender === 'чоловіча').map(user => user.name);

const inactiveUsers = users.filter(user => !user.isActive);

const userByEmail = users.find(user => user.email === 'ivan@example.com'); 
const getUsersByAgeRange = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
const usersInAgeRange = getUsersByAgeRange(users, 20, 30);