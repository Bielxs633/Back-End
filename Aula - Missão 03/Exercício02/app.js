/**
 * 
 *  Objetivo: gerencia as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

const { medias } = require('./Modulo/Medias.js');
const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para coletar dados
function coletarDados() {
    entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno) {
        entradaDeDados.question('Digite o nome do professor: ', function(nomeProfessor) {
            entradaDeDados.question('Digite o sexo do aluno (m/f): ', function(sexoAluno) {
                entradaDeDados.question('Digite o sexo do professor (m/f): ', function(sexoProfessor) {
                    entradaDeDados.question('Digite o nome do curso: ', function(nomeCurso) {
                        entradaDeDados.question('Digite o nome da disciplina: ', function(nomeDisciplina) {
                            entradaDeDados.question('Digite a primeira nota: ', function(nota1) {
                                entradaDeDados.question('Digite a segunda nota: ', function(nota2) {
                                    entradaDeDados.question('Digite a terceira nota: ', function(nota3) {
                                        entradaDeDados.question('Digite a quarta nota: ', function(nota4) {
                                            
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
                                            );

                                            console.log(resultado);

                                            // Verificar se o aluno está em exame e solicitar nota do exame
                                            if (resultado.includes('Em Exame')) {
                                                entradaDeDados.question('Digite a nota do exame: ', function(notaExame) {
                                                    // Chamar a função medias novamente com a nota do exame
                                                    let resultadoFinal = medias(
                                                        nomeAluno,
                                                        nomeProfessor,
                                                        sexoAluno,
                                                        sexoProfessor,
                                                        nomeCurso,
                                                        nomeDisciplina,
                                                        nota1,
                                                        nota2,
                                                        nota3,
                                                        nota4,
                                                        notaExame
                                                    );

                                                    console.log(resultadoFinal);
                                                    entradaDeDados.close();
                                                });
                                            } else {
                                                entradaDeDados.close();
                                            }

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Início da coleta de dados
coletarDados();
