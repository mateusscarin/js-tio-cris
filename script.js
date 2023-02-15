alert('Cuidado! Mata véia');
let nome = prompt('Digite seu nome:', 'Informe aqui seu nome!!');
document.write('<h2>' + nome + '</h2>');
let resp = confirm('Deseja continuar?');
if (resp)
    console.log(resp);
else
    alert(resp);