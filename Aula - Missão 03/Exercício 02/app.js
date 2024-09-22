/**
 * 
 *  Objetivo: gerencia as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

const { medias } = require('./Modulo/Medias')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    entradaDeDados.question('Digite o nome do professor: ', function(nomeProfessor){
        entradaDeDados.question('Digite o sexo do aluno (m/f): ', function(sexoAluno){
            entradaDeDados.question('Digite o sexo do professor (m/f): ', function(sexoProfessor){
                entradaDeDados.question('Digite o nome do curso: ', function(nomeCurso){
                    entradaDeDados.question('Digite o nome da disciplina: ', function(nomeDisciplina){
                        entradaDeDados.question('Digite a primeira nota: ', function(nota1){
                            entradaDeDados.question('Digite a segunda nota: ', function(nota2){
                                entradaDeDados.question('Digite a terceira nota: ', function(nota3){
                                    entradaDeDados.question('Digite a quarta nota: ', function(nota4){
                                        
                                        // Chamar a função medias com os dados coletados
                                        let resultado = medias(
                                            nomeAluno,
                                            nomeProfessor,
                                            sexoAluno,
                                            sexoProfessor,
                                            nomeCurso,
                                            nomeDisciplina,
                                            nota1,
                                            nota2,
                                            nota3,
                                            nota4
                                        )
                                        
                                        console.log(resultado)

                                        entradaDeDados.close()

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
