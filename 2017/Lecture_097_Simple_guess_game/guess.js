var secretNumber = 6;
var guess = Number(prompt("Guess the number!"));

if(guess === secretNumber) {
    alert("YOU'VE GOT IT RIGHT!!!");
}
else if(guess < secretNumber) {
    alert("Too low. Try again!");
}
else {
    alert("Too high. Try again!");
}
