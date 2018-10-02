// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((el) => {
    el.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((el) => {
    el.classList.remove("ativo");
});

menuItems[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((el) => {
    const possuiAlt = el.hasAttribute("alt");
    console.log(el, possuiAlt);
});


// Modifique o href do link externo no menu
const link = document.querySelector("a[href^='http']");
link.setAttribute("href", "#origamid");
console.log(link);
