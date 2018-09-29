// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const justImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(justImagens);

// Selecione todos os links internos (onde o href começa com #)
const allLinks = document.querySelectorAll('[href^="#"]');
console.log(allLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firsth2 = document.querySelector('.animais-descricao h2');
console.log(firsth2);
// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[--lastP.length])

