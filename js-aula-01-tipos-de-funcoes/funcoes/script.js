//funções simples
function showMessage() {
  const Message = "<h2>Olá, bem vindo!</h2>";
  document.write(Message);
}
//invocando função
showMessage();

//função com parametro/argumento
const user = "Max";

function showUserMessage(user) {
  //essa função recebe um parametro
  document.write(`<h3>O que deseja fazer hoje, ${user}?<h3>`);
}

showUserMessage(user); //envio de argumento

//função com mais de um parametro
const n1 = 10;
const n2 = 5;

function sum(n1, n2) {
  //essa função recebe dois parametros
  let result = n1 + n2;
  document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.<p>`);
}

//invocando a função
sum(n1, n2); //enviando os argumentos

//função com retorno
const num1 = 50;
const num = 3;

//é indicado que as funções possuam o minimo de responsabilidades possiveis
//essa função irá multiplicar dois numeros
function mult(num1, num2) {
  return num1 * num2;
}

document.write(`O resultado da multiplicação é ${mult(num1, num2)}.`);

//função com retorno condicional
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é ${parImpar(number)}.</p>`);

//FUNÇÃO ANÔNIMA
const divisao = function (n) {
  return n / 2;
};
let numero = 200;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`);

//FUNÇÃO SETA (ARROW FUNCTION) -> É UM TIPO DE FUNÇÃO ANÔNIMA
const dobro = (x) => {
  return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};
document.write(`<p>O resultado da operação matemática é 
    ${calculadora(1100, "-", 1)}.`);