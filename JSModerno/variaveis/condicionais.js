/*****

  CONDICIONAIS (IF, SWITCH, TRUE & FALSE)
  
  ! -> operador de negacao
  || -> OU
  && -> E
  == -> igual
  === -> estritamente igual

*****/
let possuiGraduacao = true
    possuiDoutorado = true;
let x; // escopo global

//Faz varios testes
if(!possuiGraduacao){
  console.log("Tem graducao!");
}else if(!possuiDoutorado){
  console.log("Tem doutorado");
 
} else{
  console.log("Nao possui nada!!");
}

//negacao da negacao
let verdade = true;
if(!!!!!!verdade)console.log("Verdade")
else console.log("Falso");

//SWITCH
let corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul':
    console.log("Gosta de azul");
    break;
  case 'Vermelho':
    console.log("Gosta de vermelho")
    break;
  default :
    console.log("Voce nao gosta de nenhuma cor");
    break;
}

let expressao = (5 - 5) && (5 - ' ') && (5 - 1);
let expressaoOu = (5 - 5) || (5 - '') || (5 - 1);
console.log(expressao);
console.log(expressaoOu);
