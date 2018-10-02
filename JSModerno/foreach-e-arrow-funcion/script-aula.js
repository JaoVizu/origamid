/*const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function(item, index, array){
    //console.log(item, index, array);
});*/

/**
 * ARRAY-LIKE PARA ARRAY COM "ARRAY.from(array-like)""
 */
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (el) {
    //console.log(el);
});

/**
 * ARROW FUNCTION - encurta a function expression (funcao anonima)
 */

const imgs = document.querySelectorAll('img');

/*let i = 0;
imgs.forEach((item,index,array) => {
    //console.log(item, index, array);
});*/

//argumento unico nao precisa de parenteses
//se nao tiver argumento passar o () -> forEach( () => {})
imgs.forEach(item => {
    console.log(item)
});

//quando se tem uma linha de codigo nao necessita de chaves e 
//se estiver assim nao utilizar ";" no final da instrucao
let i = 0;
imgs.forEach(item => console.log(i++));


