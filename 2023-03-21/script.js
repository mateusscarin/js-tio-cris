tabelaAlunos = document.getElementById("tabelaAlunos");
media = document.getElementById('media');

fetch("database.json").then((response) => {
    response.json().then((dados) => {
        dados.alunos.map((aluno) => {
            tabelaAlunos.innerHTML += `
            <td>${aluno.nome}</td>
            <td>${aluno.disciplina}</td>
            <td>${aluno.media}</td>
        `
        })
    })
})

function popularLista(param) {
    tabelaAlunos.innerHTML = ``;
    media.innerHTML = ``;
    fetch("database.json").then((response) => {
        response.json().then((dados) => {
            switch (Number(param)) {
                case 0:
                    dados.alunos.sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));
                    break;
                case 1:
                    dados.alunos.sort((firstItem, secondItem) => secondItem.media - firstItem.media);
                    break;
                case 2:
                    media.innerHTML =
                        `<h5> A média é:
                    ${dados.alunos.reduce((soma, aluno) => {
                            return soma + aluno.media;
                        }, 0) / 5}
                    </h5>`;
                    break;
                default:
                    console.log('Eita que não enviou parâmetro');
                    break;
            }
            dados.alunos.map((aluno) => {
                tabelaAlunos.innerHTML += `
                <td>${aluno.nome}</td>
                <td>${aluno.disciplina}</td>
                <td>${aluno.media}</td>
            `
            })
        })
    })
}