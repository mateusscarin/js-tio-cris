//EXERCÍCIO 1
function converterDuracao() {
    let nomeFilme = document.getElementById('nomeFilme').value;
    let duracaoFilme = Number(document.getElementById('duracaoFilme').value);
    let hora = Math.trunc(duracaoFilme / 60);
    let min = duracaoFilme - (hora * 60);
    document.getElementById('mostraConversao').innerText = `O filme ${nomeFilme} tem ${hora} e ${min} minutos`;
}

//EXERCÍCIO 2
function calcularPromocao() {
    let automovel = document.getElementById('automovel').value;
    let valorVeiculo = Number(document.getElementById('valorVeiculo').value);
    let entrada = valorVeiculo * 0.5;
    document.getElementById('mostraPromocao').innerText = `Promoção: ${automovel} \nEntrada de R$: ${entrada.toFixed(2)} + 12x de R$ ${(entrada / 12).toFixed(2)}`;
}

//EXERCÍCIO 3
function calcularValor() {
    let qntProduto = Number(document.getElementById('qntProduto').value);
    let valAPagar;
    if (qntProduto < 500)
        valAPagar = qntProduto * 40;
    else if (qntProduto < 1000)
        valAPagar = qntProduto * 35;
    else
        valAPagar = qntProduto * 30;
    document.getElementById('mostraValorPagar').innerText = `Valor a ser pago: ${valAPagar / 1000}`;
}

//EXERCÍCIO 4
function calcularPromocaoMedicamento() {
    let nomeMedicamento = document.getElementById('nomeMedicamento').value;
    let valMedicamento = Number(document.getElementById('valorMedicamento').value);
    document.getElementById('mostraPromocaoMedicamento').innerText = `Promoção de ${nomeMedicamento}\n
    Leve 2 por R$${Math.trunc(valMedicamento) * 2},00`;
}

//EXERCÍCIO 5
function calcularValorLanHouse() {
    let valorPeloTempo = Number(document.getElementById('valorPeloTempo').value);
    let tempoUso = Number(document.getElementById('tempoUso').value);
    let valPagar = (Math.trunc(tempoUso / 15) + (tempoUso % 15 > 0 ? 1 : 0)) * valorPeloTempo;
    document.getElementById('mostraValorLanHouse').innerText = `Valor a ser pago: R$ ${valPagar.toFixed(2)}`;
}

//EXERCÍCIO 6 
function calcularPromocaoSupermercado() {
    let nomeProduto = document.getElementById('nomeProduto').value;
    let precoProduto = Number(document.getElementById('precoProduto').value);
    let desconto = precoProduto / 2;
    document.getElementById('mostraPromocaoSupermercado').innerText = `${nomeProduto} - Promoção: Leve 3 por R$ ${((precoProduto * 3) - desconto).toFixed(2)}\nO 3º produto custa apenas R$ ${desconto.toFixed(2)}`;
}