/**
 * SELECAO DE ELEMENTOS
 */

const animais = document.getElementById('animais');
console.log(animais);

/**
 * getElementsByClassName e getElementsByTagName retornam uma lista de elementos
 * se um novo item com a mesma classe for adicionada, ele atualiza automaticamente
 */

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[2]);

/**
**seletor geral unico -> querySelector();(EXISTE DENTRO DA PROPRIA SELECAO)
**seleciona como no CSS
**/

const primeiraLi = document.querySelector('ul');
console.log(primeiraLi.querySelector('li:last-child'));

//selecionar todos os link internos
//para saber se comeca com alguma coisa colocar o ^
const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);

/**
 * querySelectorAll();
 * nao atualiza diferente do className
 */
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]);

/**
 * DIFERENCA HTMLCollection e NodeList
 * 
 * diferenca esta nos metodos e propriedades de ambas
 * NodeList retornada com querySelectorAll eh estatica
 */

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraLi.classList.add('grid-section');
//console.log(gridSectionHTML);
//console.log(gridSectionNode);

/**
 * Array-Like -> nodelist e htmlcollection
 */

gridSectionNode.forEach(function (item, index) {
    console.log(item);
})

// array-like para array normal
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
    console.log(item);
})