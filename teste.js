const saida1 = () =>{  return 'saida1' }
const saida2 = n => console.log('saida2 ', n)
// como a função tem apenas um parâmetro eu posso emitir os ()
// e se ela estiver retornando void(nada) eu emito as {}
saida2(saida1());





const n1 = v1 =>{ 
    // como a função tem apenas um parâmetro eu posso emitir o ()
     return v1
}

const somar = (v1,v2) => console.log('A soma é: ', v1 + v2)
    // função sem retorno vc pode emitir as {}
somar(n1(12),12)