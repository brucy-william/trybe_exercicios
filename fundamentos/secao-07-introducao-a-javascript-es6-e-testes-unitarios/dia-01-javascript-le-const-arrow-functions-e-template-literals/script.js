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



//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  
//   const sortOddsAndEvens = (a, b) => a -b;



// console.log(`Os números ${oddsAndEvens.sort(sortOddsAndEvens)} se encontram ordenados de forma crescente!`);


// const factorial = (param) => {
//     let result = 1
//     for (let i = 1; i <= param; i += 1) {
//         result *= i;
//     } return result;
// }

// console.log(`Esse é o fatorial ${factorial(11)}`);
                    //  0     1      2     3
                    
const string= 'meu loucura isso é dificil de mais quantacoisadoida';


const separaEdescobreMaior = (param) => {

const stringSepared = param.split(' ');
let theBig = 0;
let resultado = '';

for (const numeroDeCaracter of stringSepared) {
if (numeroDeCaracter.length > theBig)
{theBig = numeroDeCaracter.length 
resultado = numeroDeCaracter}

}
return resultado;
}

console.log(separaEdescobreMaior(string));