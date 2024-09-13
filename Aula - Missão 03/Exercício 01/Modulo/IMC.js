/**
 * 
 *  Objetivo: criar um sistema que faça o cálculo do IMC de uma pessoa
 *  Data: 07/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function calcularIMC(peso, altura){
    let p = peso
    let a = altura

    // Cálculo
    let imc = p / (a * a)
    let imc2 = imc.toFixed(2)

    let classificacao

    //Classificação:
    if (imc < 18.5){
        classificacao = "Abaixo do peso"

    }else if (imc >= 18.5 && imc < 24.9){
        classificacao = "Peso normal"

    }else if (imc >= 25 && imc < 29.9){
        classificacao = "Sobrepeso"

    }else if (imc >= 30 && imc < 34.9){
        classificacao = 'Obesidade I'

    }else if (imc >= 35 && imc < 39.9){
        classificacao = 'Obesidade II'

    }else {
        classificacao = 'Obesidade III'
    }

    // Validação de dados em branco
    if ( p == '' || a == ''){
        return '==================================================  \n|ERRO. É Obrigatório a Entrada de Todos os Valores.  \n=================================================='
     }
    
    // Validação de entrada de caracteres inválidos
    if (isNaN(p) || isNaN(a)){
        return '==================================================  \n|ERRO. Não é Permitido a Entrada de Caracteres.  \n=================================================='
    }
    
    // Verifica de valores não válidos (maiores que zero)
    if (p <= 0 || a <= 0){
         return '==================================================  \n|ERRO. Peso e Altura Devem Ser Maiores que Zero.  \n=================================================='
    }

    return `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=  \n|IMC: ${imc2}  \n|Classificação: ${classificacao}  \n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
}

//# console.log(calcularIMC(70, 1.70))

module.exports = {
    calcularIMC
}