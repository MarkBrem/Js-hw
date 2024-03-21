console.log('Домашня робота 15');

const users = [
  { name: 'Іван', balance: 1000, friends: ['Олег', 'Марія'], skills: ['JavaScript', 'HTML'] },
  { name: 'Марія', balance: 1500, friends: ['Іван', 'Олексій'], skills: ['CSS', 'JavaScript'] },
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);

const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(user => user.name);
const usersWithSpecificFriend = getUsersWithFriend(users, 'Олег'); // Наприклад, усі користувачі, у яких є друг з ім'ям "Олег"

const sortUsersByFriendsCount = users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

const allSkills = users.reduce((acc, user) => {
  user.skills.forEach(skill => {
    if (!acc.includes(skill)) {
      acc.push(skill);
    }
  });
  return acc;
}, []).sort();

