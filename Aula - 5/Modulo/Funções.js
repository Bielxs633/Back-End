/**
 * 
 *  Objetivo: Arquivo responsável pela criação de funções e estruturas de repetição
 *  Data: 30/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

//Forma tradicional de criar função:
function gerarNumeros (numeroInicial, numeroFinal){
    let numeroI = numeroInicial 
    let numeroF = numeroFinal
    let contador
    let status = true

if(validarDados(numeroI, numeroF)){
        contador = parseInt(numeroI)
    
        while (contador <= parseInt(numeroF)){
            console.log(contador)
            //# contador = contador + 1
            //# contador++
            contador += 1

        }
    }

return status

}

//Arrow function:
const gerarNovosNumeros = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador++){
            status = true
            console.log(contador)

        }
    }

    return status
}

//Função anonima:
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = true

        //Validação de dados em branco:
        if(numeroI == '' || numeroF == ''){
            console.log('ERRO. É Obrigatório a Entrada de Todos os Valores')
            status = false

        //Validação de entrada de caracteres invalidos:
        }else if(isNaN(numeroI) || isNaN(numeroF)){
            console.log('ERRO. Não é Permitido a Entrada de Caracteres')
            status = false

    }

    return status

}

//# console.log(gerarNumeros(1, 10))
//# console.log(validarDados(2, 10))
//# console.log(gerarNovosNumeros(5, 10))

module.exports = {
    gerarNumeros,
    gerarNovosNumeros
    
}