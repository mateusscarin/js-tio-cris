const numCartao = document.getElementById('numCartao');
const nome = document.getElementById('nome');
const dataVencimento = document.getElementById('dataVencimento');
const codSeguranca = document.getElementById('codSeguranca');
const cpf = document.getElementById('cpf');

const cartao = document.getElementById('cartao');
const numeroCartao = document.getElementById('num-cartao');
const nomeCartao = document.getElementById('nome-cartao');
const dataVencimentoCartao = document.getElementById('data-venc-cartao');
const codSegCartao = document.getElementById('cod-seg-cartao');
const cpfCartao = document.getElementById('cpf-cartao');

numCartao.addEventListener('keyup', () => {
    if ((numCartao.value.length > 3 && numCartao.value.length < 17) && numCartao.value.replace(/\s/g, "").length % 4 == 0) {
        numCartao.value = numCartao.value + " ";
    }
    numeroCartao.innerText = `${numCartao.value}`;
});

nome.addEventListener('keyup', () => {
    nome.value = nome.value.toUpperCase();
    nomeCartao.innerText = `${nome.value.toUpperCase()}`;
});

dataVencimento.addEventListener('keyup', () => {
    if (dataVencimento.value.length == 2) {
        dataVencimento.value += "/";
    }
    dataVencimentoCartao.innerText = `${dataVencimento.value}`;
});
dataVencimento.addEventListener('blur', () => {
    alterCard(1);
    cartao.innerHTML = `<img src="img/credit-card-verso.jpg" alt="Imagem de cartão verso">`;
});


codSeguranca.addEventListener('keyup', () => {
    codSegCartao.innerText = `${codSeguranca.value}`;
});
codSeguranca.addEventListener('blur', () => {
    alterCard(2);
    cartao.innerHTML = `<img src="img/identity-card.jpg" alt="Imagem de cartão de identidade">`;
});

const alterCard = (param) => {
    switch (Number(param)) {
        case 0:
            codSegCartao.innerText = '';
            cpfCartao.innerText = '';
            numeroCartao.innerText = `${numCartao.value}`;
            nomeCartao.innerText = `${nome.value}`;
            dataVencimentoCartao.innerText = `${dataVencimento.value}`;
            cartao.innerHTML = `<img src="img/credit-card-frente.jpg" alt="Imagem de cartão frente">`;
            break;
        case 1:
            codSegCartao.innerText = `${codSeguranca.value}`;
            cpfCartao.innerText = ``;
            numeroCartao.innerText = ``;
            nomeCartao.innerText = ``;
            dataVencimentoCartao.innerText = ``;
            cartao.innerHTML = `<img src="img/credit-card-verso.jpg" alt="Imagem de cartão verso">`;
            break;
        case 2:
            codSegCartao.innerText = ``;
            cpfCartao.innerText = `${cpf.value}`;
            numeroCartao.innerText = ``;
            nomeCartao.innerText = ``;
            dataVencimentoCartao.innerText = ``;
            cartao.innerHTML = `<img src="img/identity-card.jpg" alt="Imagem de cartão de identidade">`;
            break;
        default:
            break;
    }
}

cpf.addEventListener('keyup', () => {
    switch (Number(cpf.value.length)) {
        case 3:
        case 7:
            cpf.value += ".";
            break;
        case 11:
            cpf.value += "-";
        default:
            cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
            break;
    }
    cpfCartao.innerText = `${cpf.value}`;
});
