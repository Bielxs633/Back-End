/**
 * 
 *  Objetivo: criar um sistema que gerencie as médias escolares de uma universidade
 *  Data: 13/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function medias(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame = null) {
    // Validação dos dados de entrada:
    function validacao(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4) {
        if (nomeAluno === '' || nomeProfessor === '') {
            return '========================== \n|ERRO. Coloque os nomes. \n===========================';
        }
        if (sexoAluno === '' || sexoProfessor === '') {
            return '=========================== \n|ERRO. Determine os sexos. \n===========================';
        }
        if (nomeCurso === '') {
            return '====================== \n|ERRO. Qual o curso?. \n======================';
        }
        if (nomeDisciplina === '') {
            return '============================ \n|ERRO. Qual a disciplina?. \n============================';
        }
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            return '=========================================== \n|ERRO. As notas devem ser números válidos. \n===========================================';
        }

        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        nota3 = parseFloat(nota3);
        nota4 = parseFloat(nota4);

        if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
            return '=========================================== \n|ERRO. As notas devem estar entre 0 e 100. \n===========================================';
        }

        return null;
    }

    // Função para identificar o gênero e retornar o artigo correto:
    function identificarArtigo(sexo) {
        sexo = sexo.toLowerCase();
        if (sexo === 'm') {
            return { artigo: 'O', genero: 'Aluno', professor: 'Professor' };
        } else if (sexo === 'f') {
            return { artigo: 'A', genero: 'Aluna', professor: 'Professora' };
        } else {
            return '=================================================================== \n|ERRO. Sexo inválido. Use "m" para Masculino ou "f" para Feminino. \n===================================================================';
        }
    }

    // Validação dos dados de entrada:
    const erro = validacao(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4);
    if (erro) {
        return erro;
    }

    // Conversão das notas para números
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    nota4 = parseFloat(nota4);

    // Função para calcular média:
    function calculoMedia() {
        return (nota1 + nota2 + nota3 + nota4) / 4;
    }

    // Cálculo da média
    const media = calculoMedia();
    let situacao = '';
    let mediaFinal = media;

    if (media >= 70) {
        situacao = 'Aprovado(a)';
    } else if (media < 50) {
        situacao = 'Reprovado(a)';
    } else {
        situacao = 'Em Exame';
    }

    // Se o aluno estiver em exame, verificar a nota do exame
    if (situacao === 'Em Exame' && notaExame !== null) {
        notaExame = parseFloat(notaExame);
        if (isNaN(notaExame) || notaExame < 0 || notaExame > 100) {
            return '============================== \n|ERRO. A nota do exame deve ser um valor válido entre 0 e 100. \n==============================';
        }
        mediaFinal = (media + notaExame) / 2;

        if (mediaFinal >= 60) {
            situacao = 'Aprovado no Exame';
        } else {
            situacao = 'Reprovado no Exame';
        }
    }

    // Identificação dos gêneros e artigos para ajustar a saída:
    const generoAluno = identificarArtigo(sexoAluno);
    const generoProfessor = identificarArtigo(sexoProfessor);

    if (typeof generoAluno === 'string' || typeof generoProfessor === 'string') {
        return generoAluno;
    }

    // Exibição do relatório final:
    let resultado = `------------------------------------------------------------------------------------------------------------------------ \n` +
        `Relatório do aluno: \n` +
        `--------------------------------------------------------------------------------------------------------------------------- \n` +
        `=========================================================================================================================== \n` +
        `${generoAluno.artigo} ${generoAluno.genero} ${nomeAluno} foi ${situacao.toLowerCase()} na disciplina ${nomeDisciplina}.\n` +
        `Curso: ${nomeCurso} \n` +
        `${generoProfessor.professor}: ${nomeProfessor} \n` +
        `Notas do ${generoAluno.genero}: ${nota1}, ${nota2}, ${nota3}, ${nota4} \n` +
        `=========================================================================================================================== \n` +
        `--------------------------------------------------------------------------------------------------------------------------- \n` +
        `Média: --> ${media.toFixed(2)} <-- \n`;

    // Se o aluno fez exame, adicionar a nota do exame e a média final
    if (situacao.includes('Exame')) {
        resultado += `Nota do Exame: --> ${notaExame.toFixed(2)} <-- \n` +
            `Média Final: --> ${mediaFinal.toFixed(2)} <-- \n`;
    } else {
        resultado += `Média Final: --> ${mediaFinal.toFixed(2)} <-- \n`;
    }

    resultado += `---------------------------------------------------------------------------------------------------------------------------`;
    
    return resultado;
}

module.exports = {
    medias
}

// Exemplo de uso:
// console.log(medias("Gabriel", "Marcel", "m", "m", "DS", "BackEnd", 100, 100, 100, 100, 50)); // Nota do exame