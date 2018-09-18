/*****

  Undefined, NULL tambem sao tipos primitivos do JS
  typeof() - retorna o tipo de dado

  ********** STRING **********
  Quando uma string eh concatenada com um numero, o tipo retornado eh uma string

*****/
let nulo = null;
let simbolo = Symbol(); // symbol
let novoObjeto  = {}; //Objeto

console.log(typeof(nulo));
console.log(typeof(simbolo));
console.log(typeof(novoObjeto));

  /********** STRING *********
  Quando uma string eh concatenada com um numero, o tipo retornado eh uma string*/
  let ano = '2018';
  let mes = 9;
  let dia = 15;

  console.log(`Tipo da variavel: ${typeof(dia + mes + ano)}`);

  /********  EXERCICIO ********/
// a) Declare uma variável contendo uma string
let String = 'Esta variavel contem uma string';

// b) Declare uma variável contendo um número dentro de uma string
let bNString = "15";

// c) Declare uma variável com a sua idade
let cIdade = 19;

// d)Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let dNome = "Joao ",
  sobrenome = "Vizu",
  nomeCompleto = `${dNome + sobrenome}`;

// e) Coloque a seguinte frase em uma variável: It's time
let eFrase = "It's time";

// f) Verifique o tipo da variável que contém o seu nome
let tipoVariavel = typeof nomeCompleto;
console.log(`o tipo da variavel que contem meu nome eh ${tipoVariavel}`);
//console.log(`o tipo da variavel que contem meu nome eh ${typeof(nomeCompleto)}`);