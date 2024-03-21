console.log('Домашня робота 10');

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  alert('Hello World!');
});

const applyCallbackToEachElement = (arr, callback) => {
  const result = arr.map(callback);
  return result;
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price * (1 - discount / 100);
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90