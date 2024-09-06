/**
 * 
 *  Objetivo: Realizar tratamento de entrada de dados, manipulação de estruturas condicionais
 *  Data: 09/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

//Import da biblioteca para entrada de dados.
const { log } = require('console')
var readline = require('readline')

//Cria um objeto para realizar as entradas de dados.
var entradaDados = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do Aluno: ', function(nome){
    //Cria uma variavel local dentro da função ( let ).
    let nomeAluno = nome

    entradaDados.question('Digite o nome do Curso: ', function(curso){
        //Cria uma variavel local dentro da função ( let ).
        let cursoAluno = curso

            entradaDados.question('Digite a Nota 1: ', function(valor1){
                //Cria uma variavel local dentro da função ( let ).
                let nota1 = valor1

                entradaDados.question('Digite a Nota 2: ', function(valor2){
                    //Cria uma variavel local dentro da função ( let ).
                    let nota2 = valor2

                    entradaDados.question('Digite a Nota 3: ', function(valor3){
                        //Cria uma variavel local dentro da função ( let ).
                        let nota3 = valor3

                        entradaDados.question('Digite a Nota 4: ', function(valor4){
                            //Cria uma variavel local dentro da função ( let ).
                            let nota4 = valor4

                            let resultado
                            let situação

                            /** 
                             * 
                             * Operadores de Comparação:
                             * 
                             *  == ( Verficar a Igualdade entre dois conteudos );
                             *  != ( Verficar a Diferença entre dois conteudos );
                             *  < ( Verificar o menor valor );
                             *  > ( Verificar o menor valor );
                             *  <= ( Verificar o menor valor ou se os valores são iguais );
                             *  >= ( Verificar o maior valor ou se os valores são iguais );
                             *  === ( Verficar a Igualdade entre dois conteudos e a igualdade entre tipos dados );
                             *  ==! ( Verficar a Igualdade entre dois conteudos e a diferença entre tipos dados );
                             *  !== ( Verficar a diferença entre dois conteudos e a igualdade entre tipos dados );
                             *  !=! ( Verficar a diferença entre dois conteudos e a diferença entre tipos dados );
                             * 
                             **/

                            //Validação para validar a entrada vazio.
                            if(nomeAluno == '' || cursoAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                                console.log('Erro: é obrigatório preencher todos os dados.')
                            
                            }else{
                                //Validação para permitir a entrada de valores numériocos.  
                                //# if (isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                                if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){    
                                    console.log('Erro: é obrigatório a entrada de dados numériocos.')

                                }else{
                                    //Validação para permitir somente numeros de 0 a 10.
                                    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                        console.log('Erro: é somente permitido a entrada de valores entre 0 e 10.')

                                    }else{
                                        //Processamento para calcular média final. 
                                        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                                        // toFixed -> Diminui ou Aumenta casas decimais.
                                        // \n -> Quebra a linha.
                                        }if(resultado >= 7 && resultado <= 10 ){
                                            console,log(`\n---Boletim do Aluno--- \nNome do Aluno: ${nomeAluno} \nCurso: ${cursoAluno} \nNotas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia: ${resultado.toFixed(1)} \nSituação: Aprovado`)

                                        }else{
                                            }if(resultado >= 5 && resultado < 7 ){
                                            console,log(`\n---Boletim do Aluno--- \nNome do Aluno: ${nomeAluno} \nCurso: ${cursoAluno} \nNotas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia: ${resultado.toFixed(1)} \nSituação: Recuperação`)

                                            }else{
                                                }if(resultado >= 0 && resultado < 5 ){
                                                console,log(`\n---Boletim do Aluno--- \nNome do Aluno: ${nomeAluno} \nCurso: ${cursoAluno} \nNotas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia: ${resultado.toFixed(1)} \nSituação: Reprovado`)

                                    /** 
                                     *          
                                        //Processamento para identificar situação.
                                        if(resultado >= 7){
                                            situação = 'Aprovado'
                                        
                                        }else{
                                            if(resultado >= 5 && resultado < 7){
                                                situação = 'Recuperação'
                                            
                                            }else{
                                                situação = 'Reprovado'
                                                

                                        //Processamento para imprimir o boletim.
                                        console.log(`
                                        ---Boletim do Aluno---

                                        Nome: ${nomeAluno}
                                        Curso: ${cursoAluno}
                                        Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}
                                        Média: ${resultado.toFixed(1)}
                                        Sítuação: ${situação}
                                        `)

                                        }
                                        }
                                        }
                                    *
                                    **/

                                        entradaDados.close()
                                        
                                }
                            }
                        }
                    })
                })                    
            })           
        })
    })
})
