/*
- Apartir do paradigma funcional nos podemos não somente colocar valores como string, boolean, int e etc em uma variável mais também colocar e tratar funções como um tipo

- Então poderemos guardar valores de funções dentro de nossas variáveis.

- Atenção!. como o paradigma funcional costuma trabalhar muito com o conceito de imutabilidade poderemos ver muito variáveis do tipo **const**
*/

const getNome = function () {
    console.log("Jonas!.")
    // retorna void
    return
}

getNome();



/*
 ====== Reescrevendo código ========

    const getNome = ()=> {
	    console.log("Jonas!.")
    }

    getNome();

*/