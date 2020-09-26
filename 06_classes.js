// CLASSES ANÔNIMAS

usuario1 = { // esse também tem uma classe anônima só que implicita.
    nome: 'Jonas',
    idade: 19
}

usuario2 = new class { // Isso é uma classe anônima explicita
    constructor(){
        this.nome = 'Felipe'
        this.idade = 19
    }

}

console.log(usuario1, typeof usuario1)
console.log(usuario2, " O tipo do usuario 2 é ", typeof usuario2)

/*
Ponto a ser colocado
    Se ele for objeto de uma classe anônima vc já pode começar a tratar como objeto.

    JS não tem modificadores de tipo
*/
