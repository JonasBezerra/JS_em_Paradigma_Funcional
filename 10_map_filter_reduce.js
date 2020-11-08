// MAP, FILTER & REDUCE

/*
São metodos que permite a gente fazer esse looping por objetos interativo. De forma que usemos valores mutaveis

COMO IREI FAZER ISSO?.
    Atraves da RECURSIVIDADE
*/


// MAP -> vai passar por cada um desses items do array. vai executar 9 funções como se fossem loopings. e vai retornando os valores dela.

const nums = [1, 4, 6, 5, 7, 7, 8, 9, 10]
// vamos testar com prog. Estruturada

let newNums_1 = []

for (let n of nums) {
    newNums_1.push(n * 2)
}

console.log(newNums_1)

// Vemos que dessa forma temos valores mutaveis, onde num vai mudar a cada interação

// vemos um pouco de programação imperativa onde dizemos como e o q vai ser feito no decorrer do programa.
// E na programação funcional temos algo mais declarativo, a gente so diz oque vai ser feito. E não como vai ser feito!.

const newNums_2 = nums.map(n => n * 2)
console.log(newNums_2);



