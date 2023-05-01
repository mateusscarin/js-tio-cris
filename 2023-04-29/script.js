let container = document.getElementById('container');

const options = ['X', 'O'];

const player = options[Math.floor(Math.random() * 2)];
const robot = (player === 'X' ? 'O' : 'X');
console.log(player + " - " + robot);

let game = new Array(3);

for (let i = 0; i < game.length; i++) {
    game[i] = new Array(3);
}

for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game.length; j++) {
        game[i][j] = "";
    }
}

makeGame();

function makeGame() {
    container.innerHTML = "";
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game.length; j++) {
            container.innerHTML += `<button onclick="insertValue(${i}, ${j})">[${game[i][j]}]</button>`
        }
        container.innerHTML += '<br>';
    }
}

function insertValue(col, row) {

    if (game[col][row] != []) {
        alert("Selecione outro campo, esse já está preenchido!");
        return;
    }
    game[col][row] = player;
    console.log(game[col][row]);
    let stopLoop = true;
    if (!isVictoryPlayer() && !isVictoryRobot()) {
        while (stopLoop) {
            const numberColumn = Math.floor(Math.random() * 3);
            const numberRow = Math.floor(Math.random() * 3);
            if (game[numberColumn][numberRow] == []) {
                game[numberColumn][numberRow] = robot;
                stopLoop = false;
            }
        }
    }
    makeGame();
    if (isVictoryPlayer()) {
        alert("Parabéns você ganhou!");
        container.innerHTML = `<a href="jogo-da-velha.html">
        <button>Jogar novamente!</button>
    </a>`;
    } else if (isVictoryRobot()) {
        alert("Você perdeu... Tente novamente!");
        container.innerHTML = `<a href="jogo-da-velha.html">
        <button>Jogar novamente!</button>
    </a>`;
    }
}

function isVictoryPlayer() {
    return (game[0][0] == player && game[0][1] == player && game[0][2] == player)
        || (game[1][0] == player && game[1][1] == player && game[1][2] == player)
        || (game[2][0] == player && game[2][1] == player && game[2][2] == player)
        || (game[0][0] == player && game[1][0] == player && game[2][0] == player)
        || (game[0][1] == player && game[1][1] == player && game[2][1] == player)
        || (game[0][2] == player && game[1][2] == player && game[2][2] == player)
        || (game[0][0] == player && game[1][1] == player && game[2][2] == player)
        || (game[2][0] == player && game[1][1] == player && game[0][2] == player)
}

function isVictoryRobot() {
    return (game[0][0] == robot && game[0][1] == robot && game[0][2] == robot)
        || (game[1][0] == robot && game[1][1] == robot && game[1][2] == robot)
        || (game[2][0] == robot && game[2][1] == robot && game[2][2] == robot)
        || (game[0][0] == robot && game[1][0] == robot && game[0][2] == robot)
        || (game[0][1] == robot && game[1][1] == robot && game[1][2] == robot)
        || (game[0][2] == robot && game[1][2] == robot && game[3][2] == robot)
        || (game[0][0] == robot && game[1][1] == robot && game[2][2] == robot)
        || (game[2][0] == robot && game[1][1] == robot && game[0][2] == robot);
}