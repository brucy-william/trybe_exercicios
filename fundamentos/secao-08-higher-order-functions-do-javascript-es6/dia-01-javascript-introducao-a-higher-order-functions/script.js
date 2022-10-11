// EXERCICIO 1 ---
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };

  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };

//   RESULT ---
//   console.log(newEmployees(employeeGenerator));












// EXERCICIO 2 ---
// Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo 
// como parâmetros o número apostado e uma função que checa se o
// número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex:  ou “Parabéns você ganhou”).

const funcCheck = (myNumber, numberSorteio) => {
    if (myNumber === numberSorteio) { return true;
} else {return false};

}; 

const loteriaSorteio = (myNumber, callback) => {   
const numberSorteio =   Math.floor(Math.random() * (6 - 1) + 1);

if (callback(myNumber, numberSorteio) === true) {return 'venceu'}
else {return 'perdeu'};

};

// RESULT ---
// console.log(loteriaSorteio(5, funcCheck));












// EXERCICIO 3 ---
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

// Perguntas:
// 1-) 1 + 1;
// 2-) 5 + 3;
// 3-) 8 + 2;
// 4-) 3 - 1;
// 5-) 9 + 1;

// const arrayGabarito = ['2', '8', '10', '2', '10'];
// const arrayRespostas = ['3', '8', '10', '1', '2'];
// const Points = 3.5;

// const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const sumPoints = (arrayGabarito, arrayRespostas) => {
    let result = 0;
    for (let i = 0; i < arrayGabarito.length; i += 1){
        if (arrayRespostas[i] === arrayGabarito[i]){result += 1;} 
        else if (arrayRespostas[i] === 'N.A') { } 
        else {result -= 0.5;}
        
    } return result;
};

const Avaliador = (arrayGabarito, arrayRespostas, callback) => {
 return callback(arrayGabarito, arrayRespostas);
};

// RESULT ---
// console.log(Avaliador(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], sumPoints));


