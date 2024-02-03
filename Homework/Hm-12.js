console.log('Домашня робота 12');

// const answer = function (text) {
//     console.log(`Hello ${text}`);
// }

// const world = function (first, cb) {
//     cb(first)
// }


const number = function (randomNumber) {
    
    randomNumber = Math.random() * (100 - 1) + 1;
    if (randomNumber === userResponse) {
        console.log("Ваша відповідь правильна")
    } else {
        console.log("Ваша відповідь неправильна")
    }
}

