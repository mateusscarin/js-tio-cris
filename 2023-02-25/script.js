// EXERCÍCIO 1
let numero = Number(prompt('Digite um número:'));
console.log((numero-1), numero, (numero+1));

//let nome = prompt('Digite um número:');
//console.log((nome-1), nome, (nome-(-1)));

function numbers() {
    let numero = Number(document.getElementById('numero').value);
    document.getElementById('numeros').innerText = 'Anterior: ' + (numero-1) + '\nPróximo: ' + (numero+1);
}


// EXERCÍCIO 2
let valConta = Number(prompt('Digite o valor da conta:'));
let qntPagantes = Number(prompt('Digite a quantidade de pagantes:'));
console.log('Valor pra cada: R$' + valConta/qntPagantes);

function calcularConta(){
    let valConta = Number(document.getElementById('valConta').value);
    let pagantesConta = Number(document.getElementById('pagantesConta').value);
    document.getElementById('mediaConta').innerText = 'Valor para cada: R$' + (valConta/pagantesConta);
}


// EXERCÍCIO 3
let valProduto = Number(prompt('Digite o valor do produto:'));
let formaPagamento = Number(prompt('Informe a forma de pagamento: \n1 - À vista\n2 - À prazo'));
switch (formaPagamento) {
    case 1:
        console.log('Valor à pagar: ' + valProduto * 0.9);
        break;
    case 2:
        console.log('Valor das parcelas: ' + valProduto / 3);
        break;
    default:
        alert("Larga de ser mosca é só 1 ou 2...");
        break;
}

function calcularValor() {
    let valProduto = Number(document.getElementById('valProduto').value);
    let formasPagamento = document.getElementsByName('formaPagamento');
    let formaPagamento;
    for (let radio of formasPagamento)
        if (radio.checked)
            formaPagamento = Number(radio.value);
    switch (formaPagamento) {
        case 1:
            document.getElementById('resultado').innerText = 'Valor à pagar: ' + valProduto * 0.9;
            break;
        case 2:
            document.getElementById('resultado').innerText = 'Valor das parcelas: ' + valProduto / 3;
            break;
        default:
            document.getElementById('resultado').innerText = 'Larga de ser mosca escolhe a forma de pagamento...';
            break;
    }
}