// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
const imgTop = primeiraImg.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imgs = document.querySelectorAll("img");
    let soma=0;
    imgs.forEach((img) => {
        soma += img.offsetWidth;
    })
    console.log(soma);
}
window.onload = () => {
    somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkHeight >= 48 && linkWidth >= 48){
        console.log(link, 'Possui boa acessbilidade');
    }else{
        console.log(link, 'Nao possui boa acessbilidade');        
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

/*const tBrowser = window.innerWidth;
const menu = document.querySelector('.menu');
if(tBrowser < 720){
    menu.classList.add("menu-mobile");
}*/

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add("menu-mobile");
}
