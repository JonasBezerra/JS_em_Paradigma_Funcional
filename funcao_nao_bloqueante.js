//  Enquanto ela esta sendo executada ela continua executando o resto do código

setTimeout(function(){ 
    console.log("Oi 1");
}, 5000)

console.log("Oi 2!") // executa primeiro esse código
/*  
    so depois de 5000ms ela executará a função que tem a msg "Oi 1"
    Ou seja para executar o console.log("Oi 2!") ela não depende que o
    método de cima seja executado. essa função não bloqueia a execução dos demais
    comandos. 
    Enquanto ela não executa as outras funções vao sendo executadas
*/