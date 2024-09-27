/**
 * 
 *  Objetivo: calculo do Fatorial de um número
 *  Data: 07/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { calcularFatorial } = require('./Modulo/Fatorial.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o numero que deseja ver o fatorial: ', function(numero){
    let resultado = calcularFatorial(numero)
        
    console.log(resultado)

    entradaDeDados.close()
})