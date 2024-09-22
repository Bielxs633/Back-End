/**
 * 
 *  Objetivo: criar um sistema que gerencie as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.1
 * 
 **/

function medias(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4){

    // Função para validar os dados de entrada:
    function validacao(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4){

        if (nomeAluno === '' || nomeProfessor === '') {
            return '========================== \n|ERRO. Coloque os nomes. \n=========================='
        }

        if (sexoAluno === '' || sexoProfessor === '') {
            return '=========================== \n|ERRO. Determine os sexos. \n==========================='
        }

        if (nomeCurso === '') {
            return '====================== \n|ERRO. Qual o curso?. \n======================'
        }

        if (nomeDisciplina === '') {
            return '============================ \n|ERRO. Qual a disciplina?. \n============================'
        }

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            return '=========================================== \n|ERRO. As notas devem ser números válidos. \n==========================================='
        }

        nota1 = parseFloat(nota1)
        nota2 = parseFloat(nota2)
        nota3 = parseFloat(nota3)
        nota4 = parseFloat(nota4)

        if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
            return '=========================================== \n|ERRO. As notas devem estar entre 0 e 100. \n==========================================='
        }

        return

    }

    // Função para identificar o gênero e retornar o artigo correto:
    function identificarArtigo(sexo){
        sexo = sexo.toLowerCase()

        if (sexo === 'm'){
            return { artigo: 'O', genero: 'Aluno', professor: 'Professor' }

        } else if (sexo === 'f'){
            return { artigo: 'A', genero: 'Aluna', professor: 'Professora' }
        
        } else{
            return '=================================================================== \n|ERRO. Sexo inválido. Use "m" para Masculino ou "f" para Feminino. \n==================================================================='
        }
    }

    // Validação dos dados de entrada:
    const erro = validacao(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4)
    if (erro){
        return erro
    }

    // Conversão das notas para números
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)
    nota4 = parseFloat(nota4)

    // Função para calcular média:
    function calculoMedia(){
        return (nota1 + nota2 + nota3 + nota4) / 4
    }

    // Função para status da média:
    function validarMedia(media){

        if (media >= 70){
            return 'Aprovado'

        }else if (media < 50){
            return 'Reprovado'

        }else{
            return 'Em Exame'
        }
    }

    // Função para lidar com a situação de exame:
    function tratarExame(media){

        const entradaDeDados = require('readline-sync')
        const notaExame = entradaDeDados.questionFloat('Digite a nota do exame: ')

        if (isNaN(notaExame) || notaExame < 0 || notaExame > 100){
            return '============================== \n|ERRO. A nota do exame deve ser um valor válido entre 0 e 100. \n=============================='
        }

        if ((media + notaExame) / 2 >= 60){
            return 'Aprovado no Exame'

        }else{
            return 'Reprovado no Exame'
        }
    }

    // Cálculo da média e verificação do status:
    const mediaFinal = calculoMedia()
    let status = validarMedia(mediaFinal)

    if (status === 'Em Exame'){
        status = tratarExame(mediaFinal)
    }

    // Identificação dos gêneros e artigos para ajustar a saída:
    const generoAluno = identificarArtigo(sexoAluno)
    const generoProfessor = identificarArtigo(sexoProfessor)

    if (typeof generoAluno === 'string' || typeof generoProfessor === 'string'){
        return generoAluno
    }

    // Exibição do relatório final:
    return  `--------------------------------------------------------------------------------------------------------------------------- \n` +
            `Relatório do aluno: \n` + 
            `--------------------------------------------------------------------------------------------------------------------------- \n` +
            `=========================================================================================================================== \n` +
            `${generoAluno.artigo} ${generoAluno.genero} ${nomeAluno} foi ${status.toLowerCase()} na disciplina ${nomeDisciplina}.\n` +
            `Curso: ${nomeCurso} \n` +
            `${generoProfessor.professor}: ${nomeProfessor} \n` +
            `Notas do ${generoAluno.genero}: ${nota1}, ${nota2}, ${nota3}, ${nota4} \n` +
            `=========================================================================================================================== \n` +
            `--------------------------------------------------------------------------------------------------------------------------- \n` +
            `Média Final: --> ${mediaFinal.toFixed(2)} <-- \n` +
            `---------------------------------------------------------------------------------------------------------------------------`
}

module.exports = {
    medias
}

// Exemplo de uso:
//console.log(medias("Gabriel", "Marcel", "m", "m", "DS", "BackEnd", 100, 100, 100, 100))
