let livro = {
    titulo: "JavaScript",
    autor: "Maujor",
    paginas: 432,
    preco: 69,
    freteSedex: function (cepOrigem, cepDestino, peso) {
        let valorFrete = "";
        valorFrete = cepOrigem * cepDestino * peso;
        return valorFrete;
    },
    capitulos: {
        capitulo1: "Revisao JavaScript",
        capitulo2: "Funções",
        capitulo3: "Eventos",
        capitulo4: "Requisições"
    }
};

for (let atrb in livro) {
    if (typeof livro[atrb] === 'function') {
        continue;
    }
    if (typeof livro[atrb] === 'object') {
        for (let prop in livro[atrb]) {
            console.log(prop);
        }
    } else {
        console.log(atrb);
    }
}