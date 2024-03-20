console.log('Домашня робота 8');

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

// Через цикл for
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i !== friends.length - 1) {
    string += ', ';
  }
}
console.log(string); 

string = friends.join(', ');
console.log(string);

const cards = [
    'Карточка 1',
    'Карточка 2',
    'Карточка 3',
    'Карточка 4',
    'Карточка 5'
]

const removedCards = cards.splice(1, 2);
   console.log(cards);
   console.log(removedCards); 

const cardToRemove = 'Карточка 3'
const filteredCards = cards.filter(card => card !== cardToRemove);
console.log(filteredCards);

const cartToInsert = 'Карточка 6';
const cardToInsert = 'Карточка 6';
cards.push(cardToInsert);

console.log(cards);


const cardToUpdate = 'Карточка 4';
const updatedCards = cards.map(card => {
    if (card === cardToUpdate) {
        return 'Оновлена карточка 4';
    }
    return card;
});

console.log(updatedCards);