/**
 * EVENTOS
 * Em eventos a palavra "this" sempre fara referencia ao elemento
 */
/*const img = document.querySelector('img');
function callback(event){
    console.log(event);
}
img.addEventListener("click", callback);*/

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget); //elemento retorna ul
    console.log(event.target);//exatamente onde clicou, retorna img
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
}

linkExterno.addEventListener('click', handleLinkExterno);

/**
 * FOREACH COM EVENT LISTENER 
 */

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target);
    console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});