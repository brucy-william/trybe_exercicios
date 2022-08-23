const A = 39
const B = 38
const C = 39
let resultadoComparacao;

console.log("Entre A,B e C o Maior é o: ")

if (A > B && A > C) {
    resultadoComparacao = A;
} else if (B > A && B > C ) {
    resultadoComparacao = B;
} else if (C > A && C > B) {
    resultadoComparacao = C;
} else { resultadoComparacao = "Não existe maior!" }

console.log(resultadoComparacao);