document.write('<h4>Objetos literais possuem Atributos(Propriedades) e Métodos (Funções)<h4>',);
const pessoa = {};
document.write(typeof(pessoa))

//criando objeto
const carro = {
    //propriedades
    modelo: "gol",
    cor: "vermelho",
    //metodos
    acelerar() {
        return "Acelerando...";
    
    },
    frear(){
        return "Freando..."
    },
};
document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`)
document.write(`<p>A cor do carro é: ${carro.cor}</p>`)
document.write(`<p>Quando o carro acelera ele faz: ${carro.acelerar()}</p>`)
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`)

//manipulando arrays de objetos
const productList = [
    {

        nome: "Computador",
        marca: "Casas Bahia",
        preco: 100000000,
        descricao: "PC",

}, 

{


        nome: "Tablet",
        marca: "Lojas Cem",
        preco: 100000000000,
        descricao: "Tablet",

}, 

{

        nome: "Celular",
        marca: "Magazine Luiza",
        preco: 100000000000000,
        descricao: "Celular",

},
];
//exibindo o array de objetos atraves do foreach
document.write(`<h4>Exibindo o array de objetos através do foreach:</h4>`)
productList.forEach((product) => {
    document.write(`
        Produto: ${product.nome} <br>
        Marca: ${product.marca} <br>
        Preço: ${product.preco} <br>
        Descrição: ${product.descricao} <br> <br>
        `);
});