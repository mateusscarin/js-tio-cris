function exibirMensagem() {
    let data = new Date();
    alert(data.toString());

}

let btn = document.getElementById('btn');
btn.addEventListener('click', exibirMensagem);