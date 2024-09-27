/**
 * 
 *  Objetivo: Juntar todas as Funções
 *  Data: 20/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { calcularIMC } = require('./Modulo/IMC.js')
var {} = require('.Modulo/')
var { Tabuada } = require('./Modulo/Tabuada.js')
var { calcularFatorial } = require('./Modulo/Fatorial.js')
var { gerenciarNumeros } = require('./Modulo/par e impar.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log ('==================================')
console.log('Escolha uma das opções abaixo:')
console.log('1 - IMC')
console.log('2 - ')
console.log('3 - Tabuada')
console.log('4 - Fatorial')
console.log('5 - Pares e Ímpares')
console.log('0 - Sair')
console.log ('==================================')

entradaDeDados.question("Digite a sua escolha: ", function (escolha){

    if (escolha === '1'){
        calcularIMC()
    }

    //if (escolha === '2'){
        //()
    //}

    if (escolha === '3'){
        Tabuada()
    }

    if (escolha === '4'){
        calcularFatorial()
    }

    if (escolha === '5'){
        gerenciarNumeros()
    }

    entradaDeDados.close()
    
})
