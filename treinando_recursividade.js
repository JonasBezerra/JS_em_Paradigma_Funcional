const numero1 = [2, 3, 4, 5, 6]


// ===== COMO EU FARIA PARA MULTIPLICAR O NUMERO DESSE ARRAY COM O PARADIGMA ESTRUTURADO?  =======

let newNumber = []

for (let a of numero1) {
    newNumber.push(a * 2)
}

//console.log(newNumber)

// ===== AGORA COM RECURSÃO  =======




// A IDEIA DA RECURSÃO É CHAMAR ELA MESMA ATÉ A RESOLUÇÃO DELA MESMA
/*
    === AS 3 LEIS FUNDAMENTAIS DA RECURSÃO ===

        1. UM ALGORITMO RECURSIVO DEVE TER UM CASO BÁSICO. OU SEJA UM FIM!.
        2.DEVE MUDAR SEU ESTADO E SE APROXIMAR DO CASO BÁSICO. OU SEJA A CADA CHAMADA DA SUA FUNÇÃO RECURSIVA, O RESULTADO OBTIDO DEVE SE APROXIMAR DAQUELE RESULTADO QUE É PREVISTO COMO RESULTADO FINAL
        3. DEVE CHAMAR A SI PRÓPRIO RECURSIVAMENTE. 


    === CLASSIFICAÇÃO DE RECURSÃO ====
        1.DIRETA: QND UMA FUNÇÃO CHAMA ELA MESMA
        2.INDIRETA: QND UMA FUNÇÃO CHAMA OUTRA FUNÇÃO QUE POR SUA VEZ CHAMA A PRIMEIRA FUNÇÃO NOVAMENTE
        3.EM CAUDA: ACONTECE ONDE A CHAMADA DA RECURSIVIDADE É A ULTIMA A SER CHAMADA
        4.SEM CAUDA: QUALQUER OUTRO CASO Q NÃO TEM CAUDA

*/

const numero2 = [2, 3, 4, 5, 6]

let newNumber2 = [];
let p = 0

let res = function (array) {
    if (p >= array.length) {
        return newNumber2;
    } else {
        return res(array);
    }

}
console.log(res(numero2))