# Aprendendo JavaScript

## Entrada e Saídas

- document.getElementById('identificador')
  - innerHTML
  - innerText
  - textContent
  - value(input)

## Quebra de linha

Usar `\n` ao invés de `<br/>`

## Sistema Léxico da JavaScript

- Caractere de Escape "\": Representa caracteres especiais:
  - Sintexes válidas:
    - `"Os livros da editora O'Reilly são bons." // aspas duplas fora e simples dentro`
    - `'Os livros da editora O\'Reilly são bons' // aspas simples fora e dentro escapadas`
    - `'Mac\'Neil disse: "Vim para ficar".'  //aspas simples fora, duplas e simples escapadas dentro`
    - `"Mac'Neil disse: \"Vim para ficar\"."  //aspas duplas fora, duplas escapadas e simples dentro`

- JavaScript não é tipificada;
- Para declarar local:
  - `let a = 30; //variável local`
  - `let a = 20; //variável local de bloco`
- Para declarar global não use var;
  - `b = 25;`

- Diferença do var X let
  - let declara variáveis com escopo de bloco

    ```js
    var i = 5
    for (var i = 1; i < 10; i++){
        // some statements
    }
    // Here i is 10
    ```

    ```js
    let i = 5
    for (let i = 1; i < 10; i++){
        // some statements
    }
    // Here i is 5
    ```

- null, undefined, NaN, Infinity
  - null: indica ausência de valor;
  - undefined: declara e não incializada;
  - NaN: representar um valor que não seja um número
  - Infinity: estrapular faixa de números manipuláveis (com tipo number)

## Operandos

- 8 + 4 = 12
- "8" + "4" = "84"
- "8.65" +

## Operadores

- Operações Matemáticas = C
- Operações de Comparação
  - Além das de C:
    - === ->
Foto 1-----------
- Operações Lógicas
  - &&, || e !

for...in X for...of

## Objeto Math

- Math.abs(x)
- Math.PI
- Math.trunc -> retorna parte inteira de um número decimal

## Objetos

- Objeto: coleção de propriedades
  - chave : valor

## Objetos Literais

- Este é o tipo básico de objetos JavaScript;
- É o formato popularizado através do JSON (JavaScript Object Notation);
- O objeto é criado utilzado um par de chaves ({}) e suas propriedades e métodos são todos os públicos. Este tipo de objeto também é chamado de objeto estático;
- Todo objeto literal é um objeto único e mesmo que você armazene ele em diferentes variáveis todas apontarão para o mesmo objeto;
- Seu uso é recomendado em situações onde não podem existir mais de uma instância do objeto.

## Sintaxe literal

## Construtores

- servem para contruir Objetos;
 fu

## Private fields

- utilizando cerquilha (#);
- `#fullName`;

## Herança

- utilizando `extends`
- método estático
  - declaração: `static metodoEstatico();`
  - utilização: `NomeDaClasse.metodoEstatico();`

## Clone or copy an Object

- criar um novo objeto a partir de outro;
- `const travel = { country: "India", city: "Mumbai"}`
- Spread -> laço copiando elemento por elemento
  - `const clone1 = {...travel}`
- Object.create
  - `const clone2 = Object.create(travel)`
- Object.assign
  - `const clone3 = Object.assign({}, travel)`
- JSON
  - `const clone4 = JSON.parse(JSON.stringify(travel))`
- `RESULT: { Country : "India", City: "Mumbai" }`

## JSON

- JavaScript Object Notation;
- não pode ter funções;
- todo texto sempre tem aspas duplas;
- as propriedades sempre tem aspas duplas

```js
// JSON -> Object
let obj = JSON.parse(json);

// Object -> JSON
let json = JSON.stringify(obj);
```

## Definindo getters e setters

- Um *getter* é um método que obtém o valor de uma propriedade específica;
- Um *setter* é um método que define o valor de uma propriedade específica;
- Você pode definir getters e setters em qualquer objeto de núcleo pré-definido pelo usuário que suporta a adição de novas propriedades. A sintaxe para definir getters e setters usa a sintaxe literal do objeto;

```js
class Pessoa {
    constructor(name) {
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(newName){
        this._name = newName;
    }
}
```

## Funções

- Função é um poderoso objeto destinado a executar uma ação;
- É um bloco de código capaz de realizar ações;
- Declaração de função:

```js
function minhaFuncao(){
    // bloco de código
}
```

- Expressão de função:

```js
const minhaFuncao = function(){
    // bloco de código
}
```

- Com o uso objeto construtor precedido da palavra-chave new:

```js
let minhaFuncao = new Function(/*bloco de código*/);
```

### Declarações X expressões

- Declaração de funções:

```js
let result = add(5,5);
function add(num1, num2){
    return num1 + num2;
}
```

- Expressão de Funções:

```js
let result = add(5,5);  //ERRO!!!
let add = function(num1, num2){
    return num1 + num2;
}
```

### Parâmetros

- É possível sem passar qualquer quantidade de parâmetros para qualquer função sem causar erros;
- Os parâmetros são armazenados em um estrutura semelhante a **arrays** chamada ***arguments***;
- ***arguments*** pode receber qualquer quantidade de valores.

### Funções de seta => arrow functions

```js
let circleArea = (r) => {
    let PI = 3.14;
    let area = PI * r * r;
    return area;
}
console.log(circleArea(2))

let cicleArea2 = (r) => 3.14 * r * r;
console.log(circleArea2(2));
```

### Escopo da função

- O corpo de uma função cria um escopo local para variáveis nele declaradas

### Closures

- Declarar funções dentro de outras funções

### Funções globais

- Funções que não estão associadas a um objeto particular da linguagem
  - eval(código): executar um script inserido no argumento código;
  - isFinite(valor): testa um valor passado como argumento da função. TRUE se for número ou FALSE caso contrário;
  - isNaN(valor): testa um valor passado como argumento da função. TRUE se não for um número e FALSO caso contrário.

### Invocando funções

```js
function hello(){
    return 'Hi!';
}
console.log(hello()); //Hi!
```

```js
(function() {
    return 'oi';
}());
// oi
```

```js
(function() {
    return 'oi';
})();
// oi
```

#### Operador no lugar do parênteses

!function(){}
+function(){}
-function(){}
~function(){}

## Objeto Array

- Array é um objeto destinado a armazenar uma coleção ordenada de dados indexados sequencialmente a partir de zero
- Arrays podem conter dados do tipo objeto

### Propriedades do Construtor

- Construtor é um referência à função que cria o objeto;
- prototype: permite adicionar  novas propriedades e/ou métodos a um objeto existente;
- length: retorna a quantidade de elementos  de um array;

```js
    let arr = new Array(1, 2, 3, "a", "b", "c", {nome: "Cris;ano", cidade: "Jales"});
    let x = arr.length;//O valor de x é sete
```

### Métodos do objeto Array

- concat(arg1, arg2, arg3, ..., argn)

```js
    let arr = [1, 2, "a", "b"];
    let a = array.concat("m", "32");
    // resulta em a = [1, 2, "a", "b", "m", 32];
```

- every(função(elem, ind, obj) [,thisObjeto])

```js
    let arr = [21, 3, 18, 290];
    function funcaoUm(elem, ind){
        return (typeOf elem == "number");
    }

    let x = arr. every(funcaoUm);
    console.log(x); // retorna true, se todos são números
```

- some (função(elem, ind, obj) [,thisObjeto])

```js
    let arr = [21, 3, 18, 290];
    function funcaoUm(elem, ind){
        return (typeOf elem == "number");
    }

    let x = arr. every(funcaoUm);
    console.log(x); // retorna true, se pelo menos 1 atender a condição
```

- filter (função(elem, ind, obj) [,thisObjeto])

```js
    let arr = [21, 3, 18, 290, "a", "b"];
    function filtrarArray(elem, ind){
        return (elem >= 18);
    }
    let x = arr.filter(filtrarArray);
    console.log(x);    // retorna [21, 18, 290]
```

- forEach(função(elem, ind, obj) [,thisObjeto])

```js
    let arr = [21, 3, 18, 290, "a", "b", 7];
    let msg = "";
    function funcaoUm(elem, ind, obj){
        msg += `array[${ind}] = ${elem}\n`
    }
```

- find(função(elem, ind, obj) [,thisObjeto])

```js
    const arr = [1,2,3,4,5,6,7,4]
    console.log(arr.find(numero => numero == 4));
```

- indexOf(elemento, [arg2, true ou false])

```js
    let arr = [1,2,"a", "b", "2", "c", 1, "a", "45"];
    let a = arr.indexOf("b");   // retorna 3
    let b = arr.indexOf("a");   // retorna 2
    let c = arr.indexOf(23);    // retorna -1
```

- lastIndexOf(elemento, [arg2, true ou false])

```js
    let arr = [1,2,"a", "b", "2", "c", 1, "a", "45"];
    let a = arr.indexOf("a");   // retorna 2
    let b = arr.lastIndexOf("a");   // retorna 7
```

- join([agr])

```js
    let arr = [1,2,"a", "b"];
    let a = arr.join();           // resulta na string c = "1,2,a,b"
    let b = arr.join(" - ");      // resulta na string c = "1 - 2 - a - b"
    let c = arr.join("*");        // resulta na string c = "1*2*a*b"
```

- map(função(elem, ind, obj) [,thisObjeto])
```js
let arr = [21, 3, 18, 290];
function funcaoUm(elem, ind, obj){
    return (elem = elem * 10;);
}

let x = arr.map(funcaoUm);
console.log(x);    //retorna [210, 30, 180, 2900]
```

- push(arg1, arg2, ..., argn): acrescenta os argumentos no final de um array e retorna a nova quantidade de elementos no array;

```js
    let arr  = [1, 2, "a", "b"];
    let a = arr.push(5, 6, 7, "m"); //resulta em a = 8 //arr = [1, 2, "a", "b", 5, 6, 7, "m"]
```

- pop(): remove o último elemento de um array e retorna o valor que foi removido;
```js
    let arr  = [1, 2, "a", "b"];let a = arr.pop( ); //resulta em a = "b" e arr.length = 3
```

- reverse(): inverte a ordem dos elementos de um array;
```js
    let arr  = [1, 2, "a", "b"];arr.reverse( ); //resulta arr = ["b", "a", 2, 1]
    console.log(arr);
```

- shift(): remove o primeiro elemento de um array e retorna o valor que foi removido;
```js
    let arr  = [1, 2, "a", "b"];
    let a = arr.shift(); //resulta em a = 1 e arr.length = 3
```

- unshift(): adiciona elemento a primeira posição do array;

- reduce(função(v1, v2, ind, arr)[,vInicial]): reduz a um único resultado usando a operação da função. No caso do exemplo, acrescenta 100 ao resultado
```js
    let arr  = [1, 4, 7, 15];funcaoUm = func;on(total, valor){return total+valor;}
    let x = arr.reduce(funcaoDois,100);console.log(x);
```

- reduceRight(função(v1, v2, ind, arr)[,vInicial]): funciona de modo semelhante ao reduce, com a diferença que a função percorre o array do último elemento para o primeiro;

- slice(arg1 [,arg2]): retorna um subarray do array. Admite um ou dois argumentos que definem o índice inicial e o final do subarray a extrair:
    - Diretrizes: 
        - Extrai o subarray desde o elemento definido no arg1, mas não inclui o arg2;
        - Se não definir o arg2, extrai desde o arg1 e vai até o final;
        - Argumentos negativos revertem o início de contagem do índice para o último elemento.
```js
    let arr  = [1, 2, 3, 4, "a", "b", "c"];
    let a = arr.slice(2, 5);     //resulta em a = [3, 4, “a"]
    let a = arr.slice(3);        //resulta em a = [4, "a", "b", "c"]
    let a = arr.slice(-5, 6);    //resulta em a = [3, 4, "a", "b"]
    let a = arr.slice(-6, -4);   //resulta em a = [2, 3]
```

- splice(posição, quantidade): Remover item de uma posição específica do Array;
```js
    let arr  = [1, 2, 3, 4, "a", "b", "c"];
    arr.splice(1,1);   //resulta em arr = [1, 3, 4, "a", "b", "c"]
    arr.splice(1,2);   //resulta em arr = [1, 4, "a", "b", "c"]
```

- splice(posiçãoInicial, 0, [novoElemento]): adiciona elemento ao Array;
```js
    const paises = ["Gana", "Quênia", "Ruanda"];
    paises.splice(1, 0, "Nigéria");
    console.log(paises); //[ 'Gana', 'Nigéria', 'Quênia', 'Ruanda' ]
    paises.splice(1,2, "África do Sul");
    console.log(paises); //[ 'Gana', 'África do Sul', 'Ruanda' ]
```

- split(): Converter uma String delimitada para um Array;
```js
    let texto = 'verde,amarelo,vermelho'; 
    let cores = texto.split(','); 
```

- sort([funcao]): destina a ordenar os elementos de um array. Havendo número, serão transformados em strings para determinar a ordem, resultado em ordenação não numérica;
```js
    let arr  = [2, 128, -32, 47, 34, 111, -67];
    arr.sort(function(a,b){
        return a-b;
    }); //resulta em arr = [-67, -32, 2, 34, 47, 111, 128]
```

- Array.at(): retorna o item do índice, permitindo inteiros positivos e negativos. Muito útil para pegar o último item.
```js
    const arr = [3, 7, 2, 5, 4];
// Do começo
    arr.at(0); // -> 3
    arr.at(1); // -> 7
// Do final
    arr.at(-1); // -> 4
    arr.at(-3); // -> 2
// Maneira tradicional para acessar o último elemento
    arr[arr.length - 1];
```

### Propriedades Melhoradas de Objetos
- A ES6 introduziu a Desestruturação de array
`let [x,y] = ['a','b'];`
Equivale a:
`let x = 'a';let y = 'b';`
Outro exemplo:
`[x,y] = [y,x]; //troca os valores das variáveis.`

```js
    [x,y,z] = ['a','b','c'];
    console.log(x,y,z);
    [x,y,z] = [z,y,x];
    console.log(x,y,z);
```

#### Matriz em JS
```js
// Cria uma matriz 2x3
    let matriz = newArray(2);
    for (leti = 0; i < matriz.length; i++) {
        matriz[i] = newArray(3);
    }
// Define os valores da matriz
    matriz[0][0] = 1;
    matriz[0][1] = 2;
    matriz[0][2] = 3;
    matriz[1][0] = 4;
    matriz[1][1] = 5;
    matriz[1][2] = 6;
// Acesse um elemento da matriz
    console.log(matriz[0][1]); // Saída: 2
```

#### Operador Spread (Espalhamento)
- Sem a sintaxe de espalhamento é feito assim:
```js
    let arr_1 = [0, 1, 2];
    let arr_2 = [3, 4, 5];// adiciona todos os item de arr2 no arr1
    arr_1 = arr_1.concat(arr_2);
    console.log(arr_1); //[ 0, 1, 2, 3, 4, 5 ]
```

- Com a sintaxe de espalhamento se torna isso:
```js
    let arr_1 = [0, 1, 2];
    let arr_2 = [3, 4, 5];// adiciona todos os item de arr2 no arr1
    arr_1 = [...arr_1,...arr_2];
    console.log(arr_1); //[ 0, 1, 2, 3, 4, 5 ]
```

#### Objeto Set()
- O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
- Parâmetros: Se um objeto iterável é passado, todos os seus elementos serão adicionados ao novo Set. Se tal parâmetro não for específicado, ou se seu valor for `null`, o novo Set estará vazio.
- Descrição: Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no Set pode ocorrer apenas uma vez; ele é único na coleção doSet.
```js
let meuSet = newSet();
meuSet.add(1);                     // meuSet [1]
meuSet.add(5);                     // meuSet [1, 5]
meuSet.add(5);                     // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
let o = {a:1, b:2};
meuSet.add(o);
meuSet.add({a:1, b:2});            // variável o está referenciando outro objeto
console.log(meuSet);               //Set {1,5,'texto',{a:1,b:2},{a:1,b:2}}
meuSet.has(1);                     // true
meuSet.has(3);                     // false, 3 não foi adicionado ao set(Conjunto)
meuSet.has(Math.sqrt(25));         // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o);                     // true
meuSet.size;                       // 5
meuSet.delete(5);                  // remove 5 do set
meuSet.has(5);                     // false, 5 já foi removido
meuSet.size;                       // 4, nós simplesmente removemos um valor
console.log (meuSet);              // Set { 1,'texto',{a:1,b:2}, {a:1,b:2}}
```

#### Inverter uma String
```js
    let reverseStr = str => str.split('').reverse().join('');
    console.log(reverseStr("html"));   //lmth
```