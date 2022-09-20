// EXERCICIO 1 PARTE I:
// const testingScope = (escopo) =>  {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
    
//   }

//   testingScope(true);


// EXERCICIO 2 PARTE I:
//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  
//   const sortOddsAndEvens = (a, b) => a -b;



// console.log(`Os números ${oddsAndEvens.sort(sortOddsAndEvens)} se encontram ordenados de forma crescente!`);


// EXERCICIO 1 PARTE II:    

// const factorial = (param) => {
//     let result = 1
//     for (let i = 1; i <= param; i += 1) {
//         result *= i;
//     } return result;
// }

// console.log(`Esse é o fatorial ${factorial(11)}`);
                    

 // EXERCICIO 2 PARTE II:                    
// const string= 'meu loucura isso é dificil de mais quantacoisadoida';

// const separaEdescobreMaior = (param) => {

// const stringSepared = param.split(' ');
// let theBig = 0;
// let resultado = '';

// for (const numeroDeCaracter of stringSepared) {
// if (numeroDeCaracter.length > theBig)
// {theBig = numeroDeCaracter.length 
// resultado = numeroDeCaracter}

// }
// return resultado;
// }

// console.log(separaEdescobreMaior(string));

// EXERCICIO 3 PARTE II: 

// const buttom = document.getElementsByTagName('button')[0];
// const body = document.getElementsByTagName('body')[0];
// const contador = document.getElementsByTagName('input')[0];
// let count = 0;
// contador.valueAsNumber = 0;

// buttom.addEventListener('click', () => {
// contador.valueAsNumber += 1;
// })

// EXERCICIO 4 PARTE II: 

// const substituaX = (nome) => {
//  const frase = 'Tryber x aqui!';
//  const separed = frase.split(' ');
//  for (let i = 0; i < frase.length; i += 1) {
//     if (separed[i] === 'x') {
//         separed[i] = nome;
//     }
//  }
//  return separed.join(' ');
    

// };

// const minhasSkills = (param) => {
// let skills = ['git$github', 'CSS', 'falecendo com JS'];
// let frase = `${param} 

// Minhas três principais habilidades são:`
// for (let i = 0; i < skills.length; i += 1) {
//     frase = `${frase} 
//     - ${skills[i]}`;
// }
// return frase;
// }

// console.log(substituaX('jorge'));
