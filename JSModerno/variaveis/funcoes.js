/*****

  FUNCOES

  OBS = Os argumentos tambem podem ser outras funcoes
  RETURN - quando eh encontrado o resto da funcao nao eh interpretada(pode servir para cancelar funcao)

*****/

function areaQuadrado(lado){
  return lado*lado;
}

console.log(areaQuadrado(45));

//parametros eh o que voce fiz que vai receber um valor
function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

//argumento sao os valores que voce vai passar para a funcao
imc(80, 1.70);

//se nao passar nenhuma parametro, a funcao tem que lidar com isso
function corFavorita(cor){
  if(cor == 'azul'){
    return `Voce gosta de ${cor}`;
  }else if(cor == 'vermelho'){
    return `Voce gosta de ${cor}`;
  }else{
    return 'Voce nao gosta de nada';
  }
}

corFavorita();

// verificar se eh um numero
//nao eh uma boa pratica, o certo eh que uma funcao retorne so um tipo de dado
//Ex: so numeros, so strings, so bools etc...
function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe a sua idade';
  }else if(idade >= 60){
    return 'Voce eh da terceira idade';
  }else{
    return 'Voce nao eh da terceira idade';
  }
}