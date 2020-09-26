// Enquanto dois códigos ficam rodando ao mesmo tempo (em paralelo), nenhum interfere no outro

setTimeout(function(){ 
    console.log("Oi 1");
}, 5000)

const minhaFuncao = function(){
    console.log("Oi 3!")
}

setTimeout(minhaFuncao, 5000) 

console.log("Oi 2!") // executa primeiro esse código

// so depois então ele roda os dois códigos em paralelo.

/*  
so depois de 5000ms ela executará a função que tem a msg "Oi 1" e "Oi 3!."
Ou seja para executar o console.log("Oi 2!") ela não depende que o
método de cima seja executado. essa função não bloqueia a execução dos demais
comandos isso se aplica nos dois que serão executados em paralelo
*/