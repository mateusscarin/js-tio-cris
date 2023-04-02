const tabela = document.getElementById("tableResults");
const busca = document.getElementById("search");

async function buscar(param) {
    let query;
    switch (Number(param)) {
        case 0:
            query = "/estados?orderBy=nome";
            break;
        case 1:
            query = "/regioes/1%7C2%7C3%7C4%7C5%7C6/estados";
            break;
        case 2:
            query = "/estados";
            break;
        default:
            console.log('Parâmetro deve ser informado!');
    }
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades".concat(query))
    const result = await response.json();
    return result;
}

async function mostrar(param) {
    tabela.innerHTML = `
        <th>ID</th><th>Nome</th><th>Sigla</th><th>Região</th>
        `;
    let dados = await buscar(param);
    if (busca.value != null && busca.value != '') {
        dados = dados.filter((uf) => uf.sigla == busca.value);
    }
    dados.map((uf) => {
        tabela.innerHTML +=
            `
                <td>${uf.id}</td>
                <td>${uf.nome}</td>
                <td>${uf.sigla}</td>
                <td>${uf.regiao.nome}</td>
            `
    });
    busca.value = '';
};
