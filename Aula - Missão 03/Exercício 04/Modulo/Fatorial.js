/**
 * 
 *  Objetivo: criar um sistema que calcule o Fatorial de um número
 *  Data: 07/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function calcularFatorial(numero){

    //Validação de entrada vazia:
    if (numero == ''){
        return '======================= \n' +
               '|ERRO. Entrada vazia. \n' +
               '======================='
    }

    //Validação de caracteres inválidos:
    if (isNaN(numero)){
        return '=========================================== \n' +
               '|ERRO. Entrada deve ser um número válido. \n' +
               '==========================================='
    }

    //Converter a entrada para número inteiro:
    numero = parseInt(numero, 10)

    //Validação de valores não permitidos:
    if (numero == 1){
        return '============================================================================ \n' +
               '|ERRO. fatorial de 1 não pode ser calculado. O número deve ser maior que 1. \n' +
               '============================================================================'

    }else if (numero <= 0){
        return '=================================== \n' +
               '|ERRO. não existe fatorial de 0. \n' +
               '==================================='
    }

    //Função para calcular o fatorial:
    function calculoFatorial(n){
        if (n === 1) return 1;
        return n * calculoFatorial(n - 1)
    }

    let resultado = calculoFatorial(numero)

    return `=-=-=-=-=-=-=-=-=-=-=-=-=-=  \n|O fatorial de: ${numero}  \n|É: ---> ${resultado} <--- \n=-=-=-=-=-=-=-=-=-=-=-=-=-=`
}

module.exports = {
    calcularFatorial
}