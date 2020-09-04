/* 
    Utilizadas apenas em Funções anônimas(funções que não possuem um nome)
    permiti reduzir a sintaxe de uma função, deixando ela mais simple para ser escrita

*/

const teste = function(){
	console.log("Essa é uma função normal")
}

// vamos transformar essa função acima em arrowFunctions

const teste2 = () =>{
		console.log("Essa é uma arrowFunctions")
}

// caso essa função retorne void, vc pode omitir as chaves. Veja o exemplo:

const teste3 = () => console.log("Essa é uma função está sem retorno");

// e se tiver retorno colocamos as chaves

const teste4 = () => { return "Arrow com retorno"}


// Vamos chamar as fuções

teste()
teste2()
teste3()
console.log(teste4())