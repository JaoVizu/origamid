/*****

  NUMEROS E OPERADORES
  var ou let para declarar variaveis tanto faz

*****/
let exp = 2e10 // 20000000000
let soma = 100 + 50; // 150
let subtracao = 100 - 50; // 50
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4

let somaStr = '100' + 50; // 10050
let subtracaoStr = '100' - 50; // 50
let multiplicacaoStr = '100' * '2'; // 200
let divisaoStr = 'Comprei 10' / 2; // NaN (Not a Number)

//isNaN() - Verifica se e um numero ou nao
//retorna true
console.log(isNaN(divisaoStr));
//diferente de um nao numero - por isso retorna false
console.log(!isNaN(divisaoStr));

