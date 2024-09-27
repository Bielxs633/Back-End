/**
 * 
 *  Objetivo: cálculo do IMC de uma pessoa
 *  Data: 07/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { calcularIMC } = require('./Modulo/IMC.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o peso: ', function(peso){
    entradaDeDados.question('Digite a altura: ', function(altura){
        let resultado = calcularIMC(parseFloat(peso), (altura))
        
        console.log(resultado)

        entradaDeDados.close()

    })
})
