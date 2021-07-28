let player1 = prompt('Player 1: Enter your name please');
let player2 = prompt('Player 2: Enter your name please');

let p1 = {
    name: document.querySelector('#p1Name'),
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
};

let p2 = {
    name: document.querySelector('#p2Name'),
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
};

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
p1.name.innerText = player1;
p2.name.innerText = player2;

let winningScore = 5,
    gameOver = false;

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
});
p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
});

reset.addEventListener('click', resetScoreboard);

winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    resetScoreboard();
});

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

function resetScoreboard() {
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        gameOver = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
