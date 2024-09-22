/**
 * Objetivo: criar um sistema que calcule o Fatorial de um número
 * Data: 07/09/24
 * Autor: Gabriel
 * Versão: 2.0
 */

function calcularFatorial(numero){

    // Função para validar a entrada:
    function validacao(numero){

        // Validação de entrada vazia:
        if (numero === ''){
            return '======================= \n' +
                   '|ERRO. Entrada vazia. \n' +
                   '======================='
        }

        // Validação de caracteres inválidos:
        if (isNaN(numero)){
            return '=========================================== \n' +
                   '|ERRO. Entrada deve ser um número válido. \n' +
                   '==========================================='
        }

        // Converter a entrada para número inteiro:
        numero = parseInt(numero, 10)

        // Validação de valores não permitidos:
        if (numero === 1){
            return '============================================================================ \n' +
                   '|ERRO. fatorial de 1 não pode ser calculado. O número deve ser maior que 1. \n' +
                   '============================================================================'
        }else if (numero <= 0){
            return '=================================== \n' +
                   '|ERRO. não existe fatorial de 0. \n' +
                   '==================================='
        }

        return
    }

    // Função para calcular o fatorial:
    function calculo(n){
        if (n === 1) return 1
        return n * calculo(n - 1)
    }

    // Validação:
    let erro = validacao(numero)
    if (erro) return erro

    // Cálculo do fatorial:
    let resultado = calculo(parseInt(numero, 10))

    return `=-=-=-=-=-=-=-=-=-=-=-=-=-=  \n|O fatorial de: ${numero}  \n|É: ---> ${resultado} <--- \n=-=-=-=-=-=-=-=-=-=-=-=-=-=`
}

module.exports = {
    calcularFatorial
}