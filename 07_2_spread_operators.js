// SPREAD
const person = {
    nome: 'Jonas',
    idade: '19',
}

// e se eu quiser colocar mais um atributo ou função nesse objeto. E eu não quero fazer isso manualmente.
// quero fazer isso de maneira dinamica no decorrer do meu programa, como faço?

// aplicando o conceito de imutabilidade do paradigma funcional, irá ficar assim

const person2 = {
    ...person,
    // eu disse, person2 vai ser igual a tudo que existe em person mais o sobrenome: "vieira"
    nome: 'Jonas Renan', 
    // a linha acima é como se fosse uma especie de polimorfismo de sobrePosição, so q nesse caso é sobre o atributo.
    // pega o atributo anterior do person e sobreEscreve com o atributo novo q esta em person2
    sobrenome:'Vieira'
}

console.log(person2)
console.log(person)

// ========= Agora vamos Aplicar em Arrays =======

const numeros = [1,5,4,8,9]
const numero2 = [...numeros, 2,3]
console.log(numero2)
// nesse caso ele não sobreEscreve, so vai colocando os valores do outro array
