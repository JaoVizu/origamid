// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll("a");

function handleClick(e){
    e.preventDefault();
    links.forEach((link) => {
        link.classList.remove("ativo");
    });
    this.classList.add("ativo");
}

links.forEach((link) => {
    link.addEventListener('click', handleClick);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('*');

function elClick(e){

    console.log(e.currentTarget);
}

allElements.forEach((el) => {
    el.addEventListener('click', elClick);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElemento(e){
    e.target.remove();
}
allElements.forEach((el) => {
    el.addEventListener('click', removeElemento);
})
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function teclaPressionada(event){
    if(event.key === 't'){
        console.log("T");
        //document.document = HTML
        document.documentElement.classList.toggle("textomaior");
    }
}

window.addEventListener('keydown', teclaPressionada);