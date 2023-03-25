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