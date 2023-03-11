//EXERCÍCIO 1
function mostrarTabuada() {
    let numero = Number(document.getElementById('numero').value);
    let tabuada = [];
    for (let i = 0; i < 11; i++)
        tabuada.push(`${i} x ${numero} = ${i * numero}\n`);
    document.getElementById('mostraTabuada').innerText = `${tabuada}`;
}

//EXERCÍCIO 2
let contas = [];
let total = 0;
function registrarConta() {
    let descricaoConta = document.getElementById('descricaoConta').value;
    let valorConta = Number(document.getElementById('valorConta').value);
    total += valorConta;
    contas.push(`${descricaoConta} - R$ ${valorConta.toFixed(2)}\n`);
    document.getElementById('mostarContas').innerText = `${contas}\n${contas.length} contas - Total R$ ${total.toFixed(2)}`;
}

// EXERCÍCIO 3 - Não funcional
function montarArvore() {
    let numeroLinhas = Number(document.getElementById('numeroLinhas').value);
    let meio = Number(numeroLinhas % 2 == 0 ? numeroLinhas / 2 : Math.trunc(numeroLinhas / 2) + 1);
    let arvore = '';

    for (let i = 1; i <= numeroLinhas; i++) {
        for (let j = 0; j <= i; j++) {
            arvore += '*';
        }
        arvore += '</br>';
    }
    for (let i = 0; i < 2; i++) {
        arvore += '*</br>';
    }
    document.getElementById('mostraArvore').innerHTML = `${arvore}`;
}