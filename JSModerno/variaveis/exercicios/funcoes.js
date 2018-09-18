// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  return !!dado;
}

console.log(isTruthy(5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4; //quadrado tem a mesma medida de lado
}

console.log(perimetro(15));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Joao', 'Vizu'));

// Crie uma função que verifica se um número é par
function isEven(number){
  return number % 2 === 0 ? true : false;
}
console.log(isEven(15));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  return typeof dado;
}

console.log(tipoDado(+'200'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
//comentar para eventuais erros
/*addEventListener('scroll', function(){
  console.log("Joao Vizu");
});*/

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));