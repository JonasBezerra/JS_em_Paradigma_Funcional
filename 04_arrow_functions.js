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

// e se tiver apenas um parâmetro na função eu posso emitir o parenteses

const teste5 = n => console.log(n); // se tiver mais de um parâmetro eu tenho q colocar o parentese

// Vamos chamar as fuções

teste()
teste2()
teste3()
console.log(teste4())
teste5();



// AGORA VAMOS DIMINUIR O CÓDIGO DA AULA SOBRE FUNÇÕES CALLBACK

const looding = setInterval(() => console.log("Looding..."), 500);

    
setTimeout(()=>{ 
    clearInterval(looding)
    console.log('loaded')
}, 1500);