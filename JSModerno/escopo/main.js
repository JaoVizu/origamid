'use strict' //impede erros bobos com declarar variaveis sem var,let e const
/**
 * ESCOPOS - evita conflitos de variaveis
 */

 /*
    ESCOPO DE FUNCAO
    variaveis declaradas dentro da funcao
    nao so acessadas fora dela
 */

function mostraCarro(){
    var carro = 'Fusca';
    console.log(carro);
}

mostraCarro();

/**
 * ESCOPO DE BLOCO (if, for, ou abrindo chaves {} para criar escopo de bloco)
 * var -> escapa do bloco (pouco utilizada atualmente)
 * let -> respeita o bloco (se tiver fora de bloco pode ser acessado em qualquer lugar)
 * const -> respeita o bloco
 * 
 * let != const
 * 
 * 
 */
{
    let mes = 'Dezembro';
}

//console.log(mes);

let i = 40;
/*for(let i = 0; i < 5; i++){
    console.log(i);
}*/

console.log(i * 10);
/**
 * const -> impede redeclaracao e impede modificar o valor da variavel
 *          em objetos podemos modificar(nao eh possivel converter o objeto)
 */
const data = {
    ano : 2018,
    mes : 'Dezembro'
}
data.ano = 2019;
data.dia = 21;

/**
 * let -> impede redeclaracao, porem permite a modificacao do valor da variavel
 * usar tudo const menos aquilo que modificar o valor
 */

 let ano;
 ano = 2018;
 ano++;
 console.log(ano);

// Por qual motivo o código abaixo retorna com erros?
// pois marca estava como const, e portas como let e estava acessando fora do bloco
// const e let tem escopo de bloco, ou seja, podem ser utilizadas apenas no mesmo escopo
{
    var cor = 'preto';
    var marca = 'Fiat';
    var portas = 4;
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
//trazer a variavel const dois para o maior escopo
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
