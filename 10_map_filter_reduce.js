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

const newNums_2 = nums.map(n => n * 2) // Expressão Lambda
console.log(newNums_2);

// FILTER -> Passa por cada um dos elementos e retorna somente aquele q corresponde a sua pespectiva

const newNums_3 = nums.filter(n =>{ return n % 2 === 0 })
console.log(newNums_3)

// REDUCE -> reduzi tudo aquilo a um único valor.



const soma = nums.reduce((acumulador,num)=> acumulador + num,0)
console.log(soma)
// Segundo Parametro é o valor anterior inicial. Um item que nao exite no nosso array. Como assim?.
// n1 vai somar com o valor inicial que é 0.
// depois esse valor vai ser acumulado

