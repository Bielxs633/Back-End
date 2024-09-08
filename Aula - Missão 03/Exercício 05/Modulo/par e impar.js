/**
 * 
 *  Objetivo: sistema que gerencie numeros pares e impares
 *  Data: 07/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function gerenciarNumeros(numeroInicial, numeroFinal){

    //Validação de entrada vazia:
    if (inicial == '' || final == '') {
        return '============================================ \n' +
               '|ERRO. As entradas devem ser preenchidas. \n' +
               '============================================'
    }

    //Validação de caracteres inválidos:
    if (isNaN(inicial) || isNaN(final)) {
        return '=============================================== \n' +
               '|ERRO. As entradas devem ser números válidos. \n' +
               '==============================================='
    }

    //Converter as entradas para números inteiros:
    inicial = parseInt(inicial, 10);
    final = parseInt(final, 10);

    //Validação de valores não permitidos:
    if (inicial < 0 || inicial > 500) {
        return '=================================================== \n' +
               '|ERRO. O número inicial deve estar entre 0 e 500. \n' +
               '==================================================='

    }else if (final < 100 || final > 1000) {
        return '==================================================== \n' +
               '|ERRO. O número final deve estar entre 100 e 1000. \n' +
               '===================================================='

    }else if (inicial >= final) {
        return '============================================================ \n' +
               '|ERRO. O número inicial deve ser menor que o número final. \n' +
               '============================================================'

    }else if (inicial == final) {
        return '================================================================ \n' +
               '|ERRO. O número inicial e o número final não podem ser iguais. \n' +
               '================================================================'
    }




}

module.exports = {
    gerenciarNumeros
}