const operacao = (a, b, c, d) => a + b + c + d;

let a = 10;
let b = 20;
let c = 30;
let d = 40;

document.write(`<p>A soma de ${a}, ${b}, ${c} e ${d} é ${operacao(a, b, c, d)}.</p>`);

console.log("Resultado da soma:", operacao(a, b, c, d));