//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let interAngle1 = 260;
let interAngle2 = -50;
let interAngle3 = -30;

let resultado;

if (interAngle1 + interAngle2 + interAngle3 === 180){
    if (interAngle1 > 0 || interAngle2 > 0 || interAngle3 > 0)
    resultado = true
} else if (interAngle1 + interAngle2 + interAngle3 !== 180)
{resultado = false}

console.log(resultado)
