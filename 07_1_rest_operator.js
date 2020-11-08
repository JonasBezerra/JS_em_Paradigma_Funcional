// Permiti passar múltiplos argumentos através de uma função
// para trata - lo como restOperator eu coloco apenas 3 pontos no parâmetro

function soma(...nums) { // nums
        let result = 0
        
        for (let a = 0; a < nums.length; a++) {        
            result += nums[a] // res = res + nums[a]
        }
        return result
    }
    
    console.log(soma(12,12,12,12)) // 48
    

// o valor dentro de nums irá ser [12, 12, 12, 12]


// ============= EXEMPLO COM ARRAY ===================

function somarArray(array) {
    let res = 0;
    for (let a = 0; a < array.length; a++) {
        // vai iterar sobre o valor de cada posição
        res += array[a]
    }
    return res
}

console.log(somarArray([12, 12, 12, 12]))
