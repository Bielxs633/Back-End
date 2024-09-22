/**
 * 
 *  Objetivo: gerenciar números pares e ímpares
 *  Data: 08/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

const { gerenciarNumeros } = require('./Modulo/par e impar.js')
const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o número inicial: ', function(inicial){
    entradaDeDados.question('Digite o número final: ', function(final){
        entradaDeDados.question('Digite se quer ver (pares, impares ou ambos): ', function(tipo){

            // Chamar a função gerenciarNumeros com o tipo correto:
            let resultado = gerenciarNumeros(parseFloat(inicial), parseFloat(final), tipo.trim())
        
            console.log(resultado)
    
            entradaDeDados.close()
    
        })
    })
})