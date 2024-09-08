/**
 * 
 *  Objetivo: gerenciar numeros pares e impares
 *  Data: 08/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { gerenciarNumeros } = require('./Modulo/par e impar.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o numero inicial: ', function(inicial){
    entradaDeDados.question('Digite o numero final: ', function(final){
        let resultado = gerenciarNumeros(parseFloat(inicial), parseFloat(final))
        
        console.log(resultado)

        entradaDeDados.close()

    });
});
