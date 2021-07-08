'use strict';
let maximum = parseInt(prompt('Enter maximum number'));

while (!maximum) {
    maximum = parseInt(prompt('Please, enter a valid number'));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);

let guess;
let count = 1;

guess = prompt('Enter your first guess');
while (parseInt(guess) !== targetNumber) {
    if (guess === 'q') break;
    count++;
    if (guess > targetNumber) {
        guess = prompt('Too high... Try again');
    } else {
        guess = prompt('Too low... Try again');
    }
}
if (guess === 'q') {
    console.log('YOU Quit!');
} else {
    console.log(`You win!!!   Only ${count} attempts needed! `);
}
