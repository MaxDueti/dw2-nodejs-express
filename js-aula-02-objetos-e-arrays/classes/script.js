//classes no js

//nome da classe deve iniciar em maiusculo

class Carro {
    //definindo os atributos
    constructor(marca, modelo, ano) {
        //this é uma referencia ás instancias que serão criadas atraves dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
}
        //definindo metodos
        buzinar() {
            return "Beep!, Beepp!";
            
        }
    
}

//instanciando objetos
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(`<p> O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</P>`);