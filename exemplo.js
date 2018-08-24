let numeros = [2, 4, 6, 8, 10];

let dobros = numeros.map(function(valor) {
    return 2 * valor;
});

console.log(dobros);

let triplos = numeros.map(valor => valor *3);
console.log(triplos);

function Contato(nome, telefone){
    this.nome = nome;
    this.telefone = telefone;

    this.exibir = function(){
        console.log(this.nome);
        console.log(this.telefone);
    }
}
let c1 = new Contato("julio", "telefone");
c1.exibir();

class Dragao {
    constructor(poder, defesa, raridade){
        this.poder = poder;
        this.defesa = defesa;
        this.raridade = raridade;
    }



    exibir() {
        console.log(this.poder);
        console.log(this.defesa);
        console.log(this.raridade);
    }
}
let d1 = new Dragao("Darth Vader","thanos","darkseid");
d1.exibir();


class Calculadora{
    soma(x, y){
        let soma = x+y;
        console.log(soma);
        
    };
    multiplicacao(x,y){
        let multiplicacao = x*y;
        console.log(multiplicacao);
    };
}
let calculadorains = new Calculadora();
calculadorains.multiplicacao(5,7);
