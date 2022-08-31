const a = 29;
const b = 22;

// Exercicio1

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// Exercicio2

// let resultado2;
// if (a > b){
//     resultado2 = a;
// } else {resultado2 = b;}
// console.log('O maior é: ' + resultado2);

// Exercicio3

// const c = 18;
// let resultado3;
// if (a > b && a > c) {
//     resultado3 = "O maior é o: " + a + "(a)";
// } else if (b > a && b > c){
//     resultado3 = "O maior é o: " + b + "(b)";
// } else if (c > a && c > b) {
//     resultado3 = "O maior é o: " + c + "(c)";
// } else {resultado3 = "Não Existe maior";}

// console.log(resultado3);

// Exercicio4

// let parameter = 0;
// let resultado;

// if (parameter > 0) {
//     resultado = "positive";
// } else if (parameter < 0){
//     resultado = "negative";
// } else {resultado = "zero";}
// console.log(resultado);

// Exercicio5

// let angle1 = 100;
// let angle2 = 80;
// let angle3 = 50;
// let resultado;

// if (angle1 > 0 && angle2 > 0 && angle3 > 0){
//     if(angle1 + angle2 + angle3 === 180){
//     resultado = "Esse triangulo é: " + true;
// } 
// else {
//     resultado = "Esse triangulo é: " + false
// }
// } 
// else {
//     resultado = "Algum angulo esta errado";
// }

// console.log(resultado);


// Exercicio6

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

// Exercicio7

// let parameter = 80;

// if (parameter < 0 || parameter > 100){
//     resultado = "Erro, nota invalida"
// } else if (parameter >= 90){
//     resultado = "A";
// } else if (parameter >= 80){
//     resultado = "B";
// } else if (parameter >= 70){
//     resultado = "C";
// } else if (parameter >= 60){
//     resultado = "D";
// } else if (parameter >= 50){
//     resultado = "E";
// } else if (parameter < 50){
//     resultado = "F";
// }

// console.log(resultado);

// Exercicio8

// const primeira = 12;
// const segunda = 3;
// const terceira = 9;

// if (primeira % 2 === 0 || segunda % 2 === 0 || terceira % 2 === 0){
// console.log(true);
// } else {console.log(false)};

// Exercicio9

// const primeira = 14;
// const segunda = 6;
// const terceira = 10;
// let resultado;

// console.log('Existe algum numero impar ?');

// if (primeira % 2 !== 0 || segunda % 2 !== 0 || terceira % 2 !== 0){
// console.log(true);
// } else {console.log(false)};

// Exercicio10

// const custo = 0;
// const valorVenda = 30;
// const impostoCusto = 20/100 * custo;
// let lucroUnitario = valorVenda - (custo + impostoCusto);
// let lucroTotal = lucroUnitario * 1000;

// if (custo > 0 && valorVenda > 0) {
//     console.log('O Lucro de 1000 unidades é de: ' + lucroTotal);
// } else {console.log("Entrada Invalida")}



// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let contador2 = 1; contador2 < numbers.length; contador2 += 1){
//     for (let contador1 = 0; contador1 < contador2; contador1 +=1){
//     if (numbers[contador2] < numbers[contador1]){
//         let troca = numbers[contador1]; 
//         numbers[contador1] = numbers[contador2];
//         numbers[contador2] = troca;
//     }
//     }
// }
// console.log(numbers);


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let contador2 = 1; contador2 < numbers.length; contador2 += 1){
//     for (let contador1 = 0; contador1 < contador2; contador1 +=1){
//     if (numbers[contador2] > numbers[contador1]){
//         let troca = numbers[contador1]; 
//         numbers[contador1] = numbers[contador2];
//         numbers[contador2] = troca;
//     }
//     }
// }
// console.log(numbers);


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let mult = [];

// for (let contador = 0; contador < numbers.length; contador += 1){
//    if (numbers[contador +1] < numbers.length){
//         mult.push(numbers[contador] * numbers[contador +1]);
//     } else {mult.push(numbers[contador] * 2)} 
//     }

// console.log(mult);

// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let fator =[];


for (fatorial > 0; fatorial -= 1){
    fator.push(fatorial);
} 
console.log(fator);

let resultadoFator = fator[0];


for (let contador = 1; contador < fator.length; contador += 1){
    resultadoFator = resultadoFator * fator[contador];
    // console.log(resultadoFator);
} 

// console.log(resultadoFator);
























