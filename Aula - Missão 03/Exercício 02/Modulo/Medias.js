/**
 * 
 *  Objetivo: criar um sistema que gerencie as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function medias(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4){

    // Função para converter a vírgula em ponto:
    function converter(valores){
    return valor.replace(',', '.')
    }

    // Função para validar os dados de entrada:
    function validacao(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame){

        if (nomeAluno === ' ' || nomeProfessor === ' '){
            return '============================== \n|ERRO. Coloque os nomes. \n=============================='

        }else if(sexoAluno === ' ' || sexoProfessor === ' '){
            return '============================== \n|ERRO. Determine os sexos. \n=============================='
        
        }else if (nomeCurso === ' '){
            return '============================== \n|ERRO. Qual o curso?. \n=============================='
        
        }else if (nomeDisciplina === ' '){
            return '============================== \n|ERRO. Qual a disciplina?. \n=============================='

        }else if (nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == ' '){
            return '============================== \n|ERRO. As notas são obrigatórias. \n=============================='
        
        }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
            return '======================================= \n|ERRO. Não é permitido a entrada de caractéres nesse campo. \n======================================='
        
        }else if (nota1 || nota2 || nota3 || nota4 < 0 && nota1 || nota2 || nota3 || nota4 > 100){
            return '============================== \n|ERRO. As notas devem ser maiores que 0 e menores que 100. \n=============================='
        
        }else if (notaExame === ' '){
            return '============================== \n|ERRO. Coloque a nota do exame. \n=============================='
        
        }else if (isNaN(notaExame)){
            return '============================== \n|ERRO. A nota do exame deve ser um valor válido. \n=============================='
        
        }else if (notaExame < 0 || notaExame > 100){
            return '============================== \n|ERRO. A nota do exame deve ser um valor válido. \n=============================='
        }

        return
        
    }

    // Validação dos dados de entrada:
    const erro = validacao()

    if (erro){
        return erro
    }

    // Função para calcular média:
    function calculoMedia(){
        return(nota1 + nota2 + nota3 + nota4) / 4 
    }

    // Função para status da média:
    function validarMedia(media){

        if (media >= 70){
            return 'Aprovado' 
        
        }else if ( media < 50){
            return 'Reprovado'

        }else{
            return 'Em Exame'
        }

    }

    // Função para Caso de Exame:

    // Função para lidar com a situação de exame:
    function tratarExame(media){
        const entradaDeDados = require('readline-sync')
        const notaExame = entradaDeDados.questionFloat('Digite a nota do exame: ');
    }

    

}