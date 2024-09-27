/**
 * 
 * Objetivo: criar um sistema que faça o cálculo do IMC de uma pessoa
 * Data: 07/09/24
 * Autor: Gabriel
 * Versão: 1.0
 * 
 */

function calcularIMC(peso, altura){

    // Função para converter a vírgula em ponto:
    function converter(valor){
        return valor.replace(',', '.')
    }
    

    // Função para validar os dados de entrada:
    function validacao(peso, altura){

        if (peso === '' || altura === ''){
            return '==================================================\n|ERRO. É Obrigatório a Entrada de Todos os Valores.\n=================================================='
        }

        if (isNaN(peso) || isNaN(altura)){
            return '==================================================\n|ERRO. Não é Permitido a Entrada de Caracteres.\n=================================================='
        }

        if (peso <= 0 || altura <= 0){
            return '==================================================\n|ERRO. Peso e Altura Devem Ser Maiores que Zero.\n=================================================='
        }

        return
    }

    // Função para calcular o IMC:
    function calculo(peso, altura){
        let imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    // Função para classificar o IMC:
    function classificacar(imc){
        
        if (imc < 18.5){
            return 'Abaixo do peso'

        }else if (imc >= 18.5 && imc < 24.9){
            return 'Peso normal'

        }else if (imc >= 24.9 && imc < 29.9){
            return 'Sobrepeso'

        }else if (imc >= 29.9 && imc < 34.9){
            return 'Obesidade I'

        }else if (imc >= 34.9 && imc < 39.9){
            return 'Obesidade II'

        }else{
            return 'Obesidade III'
        }
    }

    // Converte a vírgula por ponto:
    altura = converter(altura)

    // Validação dos dados:
    let erro = validacao(peso, altura)
    if (erro) return erro

    // Cálculo do IMC:
    let imc = calculo(peso, parseFloat(altura))

    // Classificação do IMC:
    let classificacao = classificacar(imc)

    return `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n|IMC: ${imc}\n|Classificação: ${classificacao}\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
}

module.exports = {
    calcularIMC
}