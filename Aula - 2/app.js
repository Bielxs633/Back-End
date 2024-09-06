/**
 * 
 *  Objetivo: Manipular entrada e saída de dados pelo usuário no terminal
 *  Data: 02/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

//Importar da biblioteca readline, que é responsavel por manipular entrada de dados via terminal.
var readline = require('readline')

//Cria um objeto para realizar a entrada de dados pelo taclado no terminal.
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Criamos uma função de CallBack para receber o valor digitado do nome pelo usuario no terminal.
entradaDados.question('Digite seu Nome: ', function(nome){
    var nomeUsuario = nome

    //# console.log('O nome é: ' + nomeUsuario)
    entradaDados.question('Digite seu Email: ', function(email){
        var emailUsuario = email

        //# console.log('O email do usuario ' + nomeUsuario + ' é ' + emailUsuario)
        entradaDados.question('Digite seu Curso: ', function(curso){
            var cursoUsuario = curso
    
            //# console.log('O email do usuario ' + nomeUsuario + ' do curso ' + cursoUsuario + ' é ' + emailUsuario)

            //Concatenação Reduzida (usa [ ` ] e [ ${} ]).
            console.log(`O email do usuario ${nomeUsuario} do curso ${cursoUsuario} é ${emailUsuario}`)
            
            //Finalizar a interface de digitação do usuário.
            entradaDados.close() 

        })
    })
})
