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