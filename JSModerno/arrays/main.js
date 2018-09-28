/**
 * ARRAYS E LOOPS - PT2
 */


/*
    Para parar o loop usar o "break"
*/
 var videogames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(let item = 0; item < videogames.length; item++){
    console.log(videogames[item]);
    if(videogames[item] === 'PS4') break;
}
console.log("FOREACH");
/**
 * FOREACH SERVE PARA ARRAYS OU ARRAYS-LIKE(items ou objetos que parecem com um array)
 * parametros (item(funcao), index, array)
 */

videogames.forEach(function(item, index, array) {
    
    console.log(item, index, array);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCampeao = [1959,1962,1970,1994,2002];
console.log(anosCampeao);
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anosCampeao.forEach(function(anoCampeao){
    console.log(`O Brasil ganhou a copa de ${anoCampeao}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
console.log(frutas);
