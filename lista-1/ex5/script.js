const media = function (nota1, nota2) {
  if (nota1 + nota2 / 2 >= 5) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};
let nota1 = 10;
let nota2 = 7;
document.write(`<p>Você foi ${media(nota1, nota2)}</p>`);