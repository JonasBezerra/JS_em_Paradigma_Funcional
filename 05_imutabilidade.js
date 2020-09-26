// Funções Impuras: Modifica um estado ou trabalha com estados que podem ser modificados

const x = 10
const impurSum = y => x + y

// nesse caso x esta dependendo de um valor que esta vindo de fora da função e 
// não esta sendo passado como parâmetro. E se x for modeificado o resultado da
// minha função tambem vai ser modificado

let z = 10
const impureSumInZ = y => z += y

console.log(impureSumInZ(4)) // imprimi 14
console.log(impureSumInZ(5)) // imprimi 19 e não 15

// vemos que a execução de uma função alterou o resultado da outra

// ====== Função Pura ========

const pureSum = (x,y) => x + y
console.log(pureSum(5,3))
console.log(pureSum(7,3))

// vemos que a execução dessa função não teve efeito colateral na outra
