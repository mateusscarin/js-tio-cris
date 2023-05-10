// EXERCÍCIO 1
/*
    Faça uma função que receba um vetor(array)e um segundo parâmetro com o valor  padrão  'crescente'ou  'decrescente'.
Ordene  o  vetor  conforme  o  2º parâmetro e retorne o vetor ordenado.Mostre o vetor ordenado no console utilizando console.table().
*/
const order = (array, orderMode) => {
    let ordenedArray = [];
    ordenedArray = array.sort((a, b) => {
        if (orderMode == 'crescente')
            return a - b;
        else
            return b - a;
    });
    console.log('EXERCÍCIO 1');
    console.table(ordenedArray);
}

order([9, 6, 3, 5, 0, 8], 'decrescente');

// EXERCÍCIO 2
/*
    Faça uma função que receba 2 arrays e retorne apenasum array com todos os valores ordenados.
*/
const merge = (array1, array2) => {
    let arrayFull = [...array1, ...array2]
    console.log('EXERCÍCIO 2');
    console.log(arrayFull.sort((a, b) => a - b));
}

merge([0, 1, 5, 6, 7], [2, 3, 4])

// EXERCÍCIO 3
/*
    Faça um programa que crie um Array no modelo do método de escalonamento Round Robin. 
    Mostre o vetor:["A", "B", "C", "D", "E"]Quando o usuário clicar no botão o vetor deve ser rotacionado e o primeiro
     será colocado na última posição:["B", "C", "D", "E", "A"].
*/
let arrayroundRobin = ["A", "B", "C", "D", "E"];
const arrayOverview = document.getElementById('arrayOverview');
arrayOverview.innerHTML = `${arrayroundRobin}`
const roundRobin = () => {
    let firstElement = arrayroundRobin.shift();
    arrayroundRobin.push(firstElement);
    arrayOverview.innerHTML = `${arrayroundRobin}`
}

// EXERCÍCIO 4
/*
    Faça uma função que recebe como parâmetros um vetor e o tamanho e retorne um outro vetor dividido em pedaços menores
    como mostrado a seguir: 
    -> receba [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    -> retorne[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14]]
*/
const toSlice = (array) => {
    let newArray = [];
    const SIZEINTERVAL = 3;
    if (array.length > 2) {
        let intervalControlStart = 0;
        let intervalControlEnd = 3
        for (let i = 0; i < (array.length / SIZEINTERVAL); i++) {
            newArray.push(array.slice(intervalControlStart, intervalControlEnd));
            intervalControlStart += 3;
            intervalControlEnd += 3;
        }
    } else {
        newArray = [[...array]]
    }
    console.log('EXERCÍCIO 4')
    console.log(newArray);
}

toSlice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

// EXERCÍCIO 5
/*
    Crie uma agenda usando array que contenha nome, endereço, telefone, email (cada elemento do array será um objeto com os dados sugeridos).
    Crie as operações (botões): 
    -Inserir(após inserir, ordene o Array por nome)
    -Editar
    -Mostrar
    -Consultar 
    -Remover(após remover, ordene o Array por nome)
*/
let scheduleArray = [];
let scheduleArrayAux = [];
let inputName = document.getElementById('name');
let inputAddress = document.getElementById('address');
let inputPhone = document.getElementById('phone');
let inputEmail = document.getElementById('email');

const schedule = document.getElementById('schedule');

const insert = (index) => {
    if (index != null) {
        remove(index);
        document.getElementById('submitButton').innerHTML = `<button onclick="insert()">Salvar</button>`
    }
    scheduleArray.push({ name: inputName.value, address: inputAddress.value, phone: inputPhone.value, email: inputEmail.value });
    list();
    inputName.value = "";
    inputAddress.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
}

const update = (index) => {
    let item = scheduleArray[index];
    inputName.value = item.name;
    inputAddress.value = item.address;
    inputPhone.value = item.phone;
    inputEmail.value = item.email;
    document.getElementById('submitButton').innerHTML = '';
    document.getElementById('submitButton').innerHTML = `<button onclick="insert(${scheduleArray.indexOf(item)})">Editar</button>`
}

const search = () => {
    let scheduleArrayAux = [...scheduleArray];
    let consult = document.getElementById('consult').value;
    scheduleArray = scheduleArray.filter((item) => item.name.toLowerCase().includes(consult.toLowerCase()));
    list();
    scheduleArray = [...scheduleArrayAux];
}

const list = () => {
    schedule.innerHTML = '';
    orderByName();
    scheduleArray.forEach((item) => {
        schedule.innerHTML += `
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td><button onclick="remove(${scheduleArray.indexOf(item)})">Remover</button></td>
        <td><button onclick="update(${scheduleArray.indexOf(item)})">Editar</button></td>
        `;
    });
}
function remove(index) {
    scheduleArray = scheduleArray.splice(index, index);
    list();
}

const orderByName = () => {
    scheduleArray.sort((a, b) => a.name.localeCompare(b.name));
}

// EXERCÍCIO 6
/* 
    Crie um script utilizando o objeto Array que manipule uma Lista Linear conforme os modelos:
[1] PILHA(Capacidade: 10 elementos)
    •PUSH(empilhar, inserir)
    •POP(desempilhar, remover)
    •TOP(retorna elemento do topo da pilha sem removê-lo)
    •INIT: inicia a pilha como "Vazia"
    •Tamanho da pilhA
[2] FILA(Capacidade: 10 elementos)
    •Enqueue(enfileirar)
    •Dequeue(desenfileirar, tirar,remover, oudelete)
    •isEmpty
    •isFull
    •Tamanho da fila
*/
let arrayLinearList = new Array();
const linearList = document.getElementById('linearList');
const stackUpEnquete = () => {
    if (arrayLinearList.length < 10) {
        arrayLinearList.push(Math.floor(Math.random() * 10));
        linearList.innerHTML = `${arrayLinearList}`;
    }
}

const unstack = () => {
    arrayLinearList.pop();
    linearList.innerHTML = `${arrayLinearList}`;
}

const topElement = () => {
    linearList.innerHTML = `Elemento do topo: ${arrayLinearList.at(0)}`;
}

const init = () => {
    arrayLinearList = [];
    linearList.innerHTML = `Lista limpa com sucesso!`;
}

const size = () => {
    linearList.innerHTML = `Tamanho da lista: ${arrayLinearList.length} elementos`;
}

const enqueue = () => {
    arrayLinearList.push(Math.floor(Math.random() * 10));
    linearList.innerHTML = `${arrayLinearList}`;
}

const dequeue = () => {
    arrayLinearList.splice(1, 0)
    linearList.innerHTML = `${arrayLinearList}`;
}

const isEmpty = () => {
    linearList.innerHTML = `Está vazia? ${arrayLinearList.length === 0}`;
}

const isFull = () => {
    linearList.innerHTML = `Está cheia? ${arrayLinearList.length === 10}`;
}