/**
 * 
 * Objetivo: sistema que gerencie o cálculo de tabuadas
 * Data: 13/09/24
 * Autor: Gabriel
 * Versão: 1.0
 * 
 */

function Tabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){

    // Função para validar os dados de entrada:
    function validarEntradas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){

        // Validação de entrada vazia:
        if (tabuadaInicial === '' || tabuadaFinal === '' || contadorInicial === '' || contadorFinal === ''){
            return '================================================ \n' +
                   '|ERRO. Todas as entradas devem ser preenchidas. \n' +
                   '================================================'
        }

        // Validação de caracteres inválidos:
        if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)){
            return '==================================================================== \n' +
                   '|ERRO. Todas as entradas devem ser preenchidas com números válidos. \n' +
                   '===================================================================='
        }

        // Converter as entradas para números inteiros:
        tabuadaInicial = parseInt(tabuadaInicial, 10)
        tabuadaFinal = parseInt(tabuadaFinal, 10)
        contadorInicial = parseInt(contadorInicial, 10)
        contadorFinal = parseInt(contadorFinal, 10)

        // Validação de limites:
        if (tabuadaInicial < 2 || tabuadaInicial > 100){
            return '=================================================== \n' +
                   '|ERRO. A tabuada inicial deve estar entre 2 e 100. \n' +
                   '==================================================='
        }

        if (tabuadaFinal < 2 || tabuadaFinal > 100){
            return '=================================================== \n' +
                   '|ERRO. A tabuada final deve estar entre 2 e 100. \n' +
                   '==================================================='
        }

        if (contadorInicial < 1 || contadorInicial > 50){
            return '=================================================== \n' +
                   '|ERRO. O contador inicial deve estar entre 1 e 50. \n' +
                   '==================================================='
        }

        if (contadorFinal < 1 || contadorFinal > 50){
            return '=================================================== \n' +
                   '|ERRO. O contador final deve estar entre 1 e 50. \n' +
                   '==================================================='
        }

        if (tabuadaInicial > tabuadaFinal){
            return '=================================================================== \n' +
                   '|ERRO. A tabuada inicial deve ser menor ou igual à tabuada final. \n' +
                   '==================================================================='
        }

        if (contadorInicial > contadorFinal){
            return '====================================================================== \n' +
                   '|ERRO. O contador inicial deve ser menor ou igual ao contador final. \n' +
                   '======================================================================'
        }

        return
    }

    // Função para gerar a tabuada
    function gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
        let resultado = ''

        for (let i = tabuadaInicial; i <= tabuadaFinal; i++){
            resultado += `=-=-=-=-=-=-= Tabuada do ${i} =-=-=-=-=-=-=\n`

            for (let j = contadorInicial; j <= contadorFinal; j++){
                resultado += `${i} x ${j} = ${i * j}\n`
            }

            resultado += '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'
        }

        return resultado
    }

    // Validação das entradas
    let erro = validarEntradas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
    if (erro) return erro

    // Geração da tabuada
    return gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
}

module.exports = {
    Tabuada
}
