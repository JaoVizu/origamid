/*****
 * 
 * OBJETOS
 *  servem para organizar o codigo em pequenas partes reutilizaveis
 *  (like struct)
 * CONSOLE EH UM OBJETO NATIVO DO BROWSER
 ******/

 /**
  * Para acessar uma propriedade deve-se usar o Dot Notatio Get
  * ou seja objeto.propriedade (.)
  * 
  * Atribuir valor direto utilizar Dot Notation Set
  * ou seja, criar uma nova propriedade ou metodo para o objeto
  */
var menu = {
    width: 800,
    height: 900,
    metadeHeight() {
        return this.height / 2; //menu.height
    }
}

//Dot Notation Get
console.log(menu.width);
//Dot notation set
menu.color = '#FFF';
console.log(menu);

/***
 * Math eh um objeto nativo do JS
 * Ex : Math.PI; Math.random()
 * Quadradinho roxo = METODO
 * Quadrarinho azul = propriedade
 */
console.log(Math.E); //propriedade
console.log(Math.random()); //metodo

/** COOLEST **/
let teste = [1,5,6];
console.table(teste);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoa = {
    nome: 'Joao', 
    sobrenome: 'Vizu',
    cpf: '47232843895',
    nomeCom(){
        return `${this.nome} ${this.sobrenome}`
    }
}

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    late(pessoa){
        if(pessoa === 'homem'){
            return 'au au';
        }else{
            return 'Nada';
        }
    }
}