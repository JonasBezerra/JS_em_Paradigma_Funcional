// REQUISITO:
//  TER VISUALIZADO FUNÇÕES NÃO BLOQUEANTE E FUNÇÕES DE PRIMEIRA CLASSE

function imprimir(){
    console.log("Função 1")
}

const impressao2 = function(f){
    return f
}

// chamar impressão 2
impressao2(imprimir())
// imprimi "Função1"
// A função passada como parâmetro é chamada de callback.
// veremos nos próximos exemplos