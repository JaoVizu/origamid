/**
 * DIMENSOES E DISTANCIAS
 * WIDTH E HEIGHT
 */

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
console.log(height);

/*offsetTop -> topo da pagina ate o elemento
 e offsetTop-> esquerda da pagina ate o elemento
*/

const animaisTop = listaAnimais.offsetTop;
const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left)
/*
    getBoundingRect() -> retornar um objeto com as dimensoes do DOM selecionado
*/

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

/**
 * WINDOW
 */
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
    window.pageYOffset



);
