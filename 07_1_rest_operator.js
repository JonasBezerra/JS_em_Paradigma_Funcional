// Permiti passar múltiplos argumentos através de uma função
// para trata - lo como restOperator eu coloco apenas 3 pontos no parâmetro

function soma(...nums) { // nums é um array
    let result = 0
    console.log(nums)
    
    for (const index of nums) {
        result+= index
        // nesse caso o for ta iterando sobre o valor de vada posição
    }
    return result
}

console.log(soma(12,12,12,12))

// o valor dentro de nums irá ser [12, 12, 12, 12]


// ============= EXEMPLO COM ARRAY ===================

function somarArray(array) {
    let res = 0;
    for (const a of array) {
        // vai iterar sobre o valor de cada posição
        res += a
    }
    return res
}

console.log(somarArray([12,12,12,12]))
