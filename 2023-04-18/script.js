let errors = document.getElementById('cont-errors');
let imgErrors = document.getElementById('img-errors');
let letterTest = document.getElementById('letter-test');
let informedLetters = document.getElementById('informed-letters');
let word = document.getElementById('word');
let inputMatch = document.getElementById('input-match');

const words = ['SCARIN', 'JAVASCRIPT', 'JAVA', 'RUBY', 'PYTHON', 'PHP', 'SWIFT', 'DART', 'KOTLIN', 'TYPESCRIPT'];
let contErros = Number(0);
let constructWord = [];
let letters = [];
let selectedWord;

selectedWord = words[Math.floor(Math.random() * 10)];
console.log(selectedWord);
errors.innerHTML = `Erros: ${contErros}`
for (let i = 0; i < selectedWord.length; i++) {
    word.innerHTML += '_ '
}

function letterMatch() {
    if (validateLetter()) {
        let controlError = true;
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord.charAt(i).toLowerCase() === letterTest.value.toLowerCase()) {
                controlError = false;
                break;
            }
        }
        if (controlError) {
            contErros++;
            errors.innerHTML = `Erros: ${contErros}`;
            imgErrors.innerHTML = `<img src="img/img${contErros}.png" alt="Imagem de erros">`;
        }
        letters.push(letterTest.value.toUpperCase());
        makeWord();
        messageNotification();
        informedLetters.innerHTML = `Letras já informadas: ${letters}`;
    } else {
        alert("Letra já foi informada!");
    }
}

function makeWord() {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord.charAt(i).toLowerCase() === letterTest.value.toLowerCase()) {
            constructWord[i] = `${letterTest.value.toUpperCase()}`;
        } else {
            if (constructWord[i] == null || constructWord[i] === '_ ') {
                constructWord[i] = `_ `;
            }
        }
    }
    word.innerHTML = ``;
    for (let i = 0; i < constructWord.length; i++) {
        word.innerHTML += `${constructWord[i]}`;
    }
}

function validateLetter() {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].toLowerCase() === letterTest.value.toLowerCase()) {
            return false;
        }
    }
    return true;
}

function messageNotification() {
    if (contErros < 6) {
        let controlMessage = true;
        constructWord.forEach((character) => {
            if (character == '_ ') {
                controlMessage = false;
            }
        });
        if (controlMessage) {
            inputMatch.innerHTML = `<a href="jogo-da-forca.html">
                                        <button>Jogar novamente!</button>
                                    </a>`;
            alert('Você ganhou!');
        }
    } else {
        inputMatch.innerHTML = `<a href="jogo-da-forca.html">
                                        <button>Jogar novamente!</button>
                                    </a>`;
        alert('Você perdeu!');
    }
}