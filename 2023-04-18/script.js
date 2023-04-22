let errors = document.getElementById('cont-errors');
let letterTest = document.getElementById('letter-test');
let word = document.getElementById('word');

const words = ['EITA', 'TESTE', 'SCARIN'];
let contErros = Number(0);
let constructWord = [];
let letters = [];
let selectedWord;

selectedWord = words[Math.floor(Math.random() * 3)];
console.log(selectedWord);
errors.innerHTML = `Erros: ${contErros}`
for (let i = 0; i < selectedWord.length; i++) {
    word.innerHTML += '_ '
}

/* Confere se a letra informada existe na palavra a ser descoberta ou não */
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
        }
        letters.push(letterTest.value);
        makeWord();
    } else {
        alert("Letra já foi informada!");
    }
}

/* Monta a palavra depois que começa os chutes */
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
    for(let i = 0; i < constructWord.length; i++){
        word.innerHTML += `${constructWord[i]}`;
    }
}

/* Verifica se a letra informada já não foi chutada */
function validateLetter() {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].toLowerCase() === letterTest.value.toLowerCase()) {
            return false;
        }
    }
    return true;
}