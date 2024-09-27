/**
 * 
 *  Objetivo: Juntar todas as Funções
 *  Data: 20/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

var { Exercício01 } = require('./Exercício01/Modulo/IMC.js')
var { Exercício02 } = require('./Exercício02/Modulo/Medias.js')
var { Exercício03 } = require('./Exercício03/Modulo/Tabuada.js')
var { Exercício04 } = require('./Exercício04/Modulo/Fatorial.js')
var { Exercício05 } = require('./Exercício05/Modulo/par e impar.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log ('==================================')
console.log('Escolha uma das opções abaixo:')
console.log ('==================================')
console.log('1 - IMC')
console.log('2 - Media')
console.log('3 - Tabuada')
console.log('4 - Fatorial')
console.log('5 - Pares e Ímpares')
console.log('0 - Sair')
console.log ('==================================')

entradaDeDados.question("Digite a sua escolha: ", function (escolha){

    if (escolha === '1'){

        entradaDeDados.question('Digite o peso: ', function(peso){
            entradaDeDados.question('Digite a altura: ', function(altura){

                let resultado = Exercício01.calcularIMC(parseFloat(peso), (altura))
                
                console.log(resultado)
        
                entradaDeDados.close()
        
            })
        })
    }

    if (escolha === '2'){
    
    }

    if (escolha === '3'){
   
        entradaDeDados.question('Digite a tabuada inicial (2 a 100): ', (tabuadaInicial) => {
            entradaDeDados.question('Digite a tabuada final (2 a 100): ', (tabuadaFinal) => {
                entradaDeDados.question('Digite o contador inicial (1 a 50): ', (contadorInicial) => {
                    entradaDeDados.question('Digite o contador final (1 a 50): ', (contadorFinal) => {
        
                        let resultado = Exercício03.Tabuada(parseFloat(tabuadaInicial), (tabuadaFinal), (contadorInicial), (contadorFinal))
        
                        console.log(resultado)
        
                        entradaDeDados.close()
        
                    })
                })
            })
        })  
    }

    if (escolha === '4'){

        entradaDeDados.question('Digite o numero que deseja ver o fatorial: ', function(numero){

            let resultado = Exercício04.calcularFatorial(numero)
                
            console.log(resultado)
        
            entradaDeDados.close()
        })

    }

    if (escolha === '5'){

        entradaDeDados.question('Digite o número inicial: ', function(inicial){
            entradaDeDados.question('Digite o número final: ', function(final){
                entradaDeDados.question('Digite se quer ver (pares, impares ou ambos): ', function(tipo){
        
                    // Chamar a função gerenciarNumeros com o tipo correto:
                    let resultado = Exercício05.gerenciarNumeros(parseFloat(inicial), parseFloat(final), tipo.trim())
                
                    console.log(resultado)
            
                    entradaDeDados.close()
            
                })
            })
        }) 

    }

    if (escolha === '0'){

        console.log(`============== \n|Obrigado \n==============`)

        entradaDeDados.close()

    }

    entradaDeDados.close()
    
})