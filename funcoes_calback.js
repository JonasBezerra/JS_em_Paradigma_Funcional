/*
    São funções passadas como parâmetro. 
        A principal vantagem do callback é q eu não preciso esperar uma função ser executada para executar a outra, elas podem ser executada independentemente.
        Enquanto espero para ser executado nada impede de outras funções serem executadas
*/

const looding = setInterval(function(){
	console.log("Looding")}, 500);
/*
 setInterval(function, minuto)
 É uma função do JS que vai executar uma determinada tarefa em um
 determinado periodo de tempo sem parar

 ====================================================

 Nela podemos ver funções de primeira classe e o famoso callback.
 E vemos tambem ela trabalhando de forma assíncrona
*/

// vamos fazer o setInterval Parar.

 setTimeout(()=>{
     clearInterval(looding)
 }, 1500);