/*const menu = document.querySelector('.menu');
menu.classList.add("ativo", "teste");
menu.classList.remove("ativo");
//menu.classList.toggle("ativo");//se nao tiver coloca, se tiver tira

if( menu.classList.contains("ativo")) {
    menu.classList.add('possui-azul');
}else{
    menu.classList.add('nao-possui-azul');
}
console.log(menu.classList);*/

//attirbutes retorna um array com os atributos do elemento(id, class href)
const animais = document.querySelector('.animais');
console.log(animais.attributes[2]);
//ja que se parece com um objeto pode usar a dot notation
console.log(animais.attributes.id);
//caso tenha hifen no atributo utilizar assim
console.log(animais.attributes['data-texto']);

//getAttributes e setAttributes->metodos que retorna ou definem o atributo selecionado
const img = document.querySelector("img");
const src = img.getAttribute("src");
//cria novo atributo ou atualiza -> nome e valor
img.setAttribute("alt", "Eh uma raposa");
const possuiAlt = img.hasAttribute("title"); //verifica se tem o atributo
console.log(src);
console.log(possuiAlt);


