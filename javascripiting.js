//aula03 Ex 1:
function sum(x, i){

	y = x + i;
	return y;

}

let v = 3;
w = 4;

/*console.log("The sum is: " + sum(w, v));*/

//aula03 Ex 2:
function sub(x, i){
	y = x - i;
	return y;

}

a = 9;
b = 8;

/*console.log("The subtraction is: " + sub(a, b));*/


//aula04 Ex 3:
let lista = ["Gato", "Laranja", "Perna", "Mulher da Vida"] //array []

let pessoa = {

	nome: "Vivian Maria",
	idade: "indefinida", 
	profissão: "Gostosa de SI",

	rebola: function rebolar(){
		console.log("Viviam está rebolando...");
	}
			
} // Linha 30-40 - objeto {}


console.log(pessoa["profissão"]); //metodo 1 de "chamar" atributo de um objeto.

console.log(pessoa.nome); //metodo 2 de chamart atributo de um objeto.

pessoa.rebola();


   /*------------------------------------XXX------------------------------------------*/
console.log(lista.length); //Qtdes de erlementos em uma array da linha 28.

lista[4] = "Soldado"; //metodo 1 de adicionar uma nova posição à array.
lista.push("Ronaldo"); // metodo 2 de adicionar um elemento à array.

console.log(lista);

console.log(lista.toString()); //Apresenta os elementos da array como apenas texto.

console.log(lista.join(" * ")); //adicionar algum caracter enmtre os itens da array.

lista.pop(); //Remove um item da array.
console.log(lista);