/**
 * 
 *  Objetivo: Realizar calculos matemáticos das principais operações matemáticas ( SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO. )
 *  Data: 30/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

// Import do arquivo de funções de calculos matemáticos:
var calculos = require('./Modulo/Calculos.js')

// Import da biblioteca para entrada de dados:
var readline = require('readline')

// Cria o objeto para fazer a entrada de dados:
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
*
* String() -> Converte uma variavel em String;
* Replace() -> Permite localizar um caracter e substituir por outro;
*
*/

// Entrada de dados do Valor 1:
entradaDeDados.question('Digite o Valor 1: ', function(valor1){
    let nu1 = String(valor1).replace(',','.')

    // Entrada de dados do Valor 2:
    entradaDeDados.question('Digite o Valor 2: ', function(valor2){
        let nu2 = String(valor2).replace(',','.')
        
        // Entrada de dados do Valor 3:
        entradaDeDados.question('Escolha a Operação Desejada [ SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR ]: ', function(operacao){
            let tipoDeCauculo = operacao

            // Validação de entrada de dados em branco:
            if (nu1 == '' || nu2 == '' || tipoDeCauculo == ''){
                console.log('Erro. É Obrigatório a Entrada de Todos os Dados.')

            // Validação de entrada de caracteres e valores: 
            }else if(isNaN(nu1) || isNaN(nu2)){
                console.log('Erro. É Obrigatório a Entrada de Dados Numéricos nos Valores.')

            }else{

                /*
                *
                * .toUpperCase() -> converte uma String para tudo MAIUCULO;
                * .TOlOWERcASE() -> converte uma String para tudo minusculo;
                * 
                */

                resultado = calculos.calculadora(nu1, nu2, tipoDeCauculo)

                // Validação de variavel indefinida:
                if(resultado){
                    console.log(resultado)

                }
            }
        })
    })
})            
