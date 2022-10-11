
// ---------------- EXERCICIO 1

// // A função getPlanet abaixo imprime o planeta Marte de forma síncrona. 
// // Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.

// const getPlanet = () => {
//     const mars = {
//       name: 'Mars',
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: 'kilometers',
//       },
//     };
//    setTimeout(() => {console.log('Returned planet: ', mars)}, 4000);
//   };
  
//   getPlanet(); // Imprime Marte depois de 4 segundos






// ---------------- EXERCICIO 2

// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
// Crie a função sendMarsTemperature de forma que:
// A função sendMarsTemperature imprima no console o seguinte texto: “A temperatura de Marte é: temperaturaAtual graus celsius” onde, 
// temperaturaAtual é o valor recebido da função getMarsTemperature; e
// A mensagem deve ser impressa no console depois de no máximo 5 segundos.
// Dica: utilize a função messageDelay para gerar o tempo de espera necessário.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//   const temperaturaAtual = getMarsTemperature();  
//   return setTimeout(() => {console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`);}, messageDelay());   
// };

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo.






// ---------------- EXERCICIO 3

// - Agora que você fez a função que envia a temperatura de Marte, 
// vamos utilizar essa temperatura para realizar outras operações. 
// No código abaixo, temos as funções temperatureInFahrenheit e greet. 
// Elas irão utilizar a temperatura obtida pela função getMarsTemperature 
// para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:

// A função sendMarsTemperature receba uma callback;
// Dica: Essa callback será uma de nossas funções: temperatureInFahrenheit ou greet;

// A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.
// Dica: Lembre-se de nossa função messageDelay para gerar o tempo de espera necessário.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// // Definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
// setTimeout(() => {callback(getMarsTemperature())}, messageDelay());
// }; 

// sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo






// ---------------- EXERCICIO 4

// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. 
// Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (onSucess, onError) => {
// const temperatura = getMarsTemperature();
// const porcentagemSucesso = Math.random();    
// const sucessoAoenviar = porcentagemSucesso < 0.6;
// console.log(porcentagemSucesso, sucessoAoenviar);
// setTimeout(() => {
//     if (sucessoAoenviar) {onSucess(temperatura)} else {onError('robot is not available')};
// }, messageDelay());

// };

// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);






// ---------------- EXERCICIO 4
