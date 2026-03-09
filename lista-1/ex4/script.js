const age = 20;

function maiorIdade(age) {
  if (age >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}
document.write(`<p>Voce tem ${age} então voce é ${maiorIdade(age)}</p>`);