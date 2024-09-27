/**
 * 
 *  Objetivo: gerencia as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { Tabuada } = require('./Modulo/Tabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a tabuada inicial (2 a 100): ', (tabuadaInicial) => {
    entradaDeDados.question('Digite a tabuada final (2 a 100): ', (tabuadaFinal) => {
        entradaDeDados.question('Digite o contador inicial (1 a 50): ', (contadorInicial) => {
            entradaDeDados.question('Digite o contador final (1 a 50): ', (contadorFinal) => {

                let resultado = Tabuada(parseFloat(tabuadaInicial), (tabuadaFinal), (contadorInicial), (contadorFinal))

                console.log(resultado)

                entradaDeDados.close()

            })
        })
    })
})