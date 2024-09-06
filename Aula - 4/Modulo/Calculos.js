/**
 * 
 *  Objetivo: Arquivo de funções para realizar calculos matemáticos das principais operações matemáticas ( SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO. )
 *  Data: 30/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

// Função para realizar calculos matemáticos ( as 4 operações ):
function calculadora(nu1, nu2, operacao){
    // Variáveis de entrada de dados que estão recebendo valores dos argumentos da função:
    let numero1 = nu1
    let numero2 = nu2
    let tipoDeCauculo = operacao
    let resultado

    /*
    // Processamento dos cauculos matemáticos:
    if(tipoDeCauculo.toUpperCase() == 'SOMAR'){
        resultado = Number(nu1) + Number(nu2)

    }else if(tipoDeCauculo.toUpperCase() == 'SUBTRAIR'){
        resultado = Number(nu1) - Number(nu2)

    }else if(tipoDeCauculo.toUpperCase() == 'MULTIPLICAR'){
        resultado = Number(nu1) * Number(nu2)

    }else if(tipoDeCauculo.toUpperCase() == 'DIVIDIR'){
        if(nu2 == 0){
            console.log('Erro. Divisão por zero não é permitida.')

        }else{
            resultado = Number(nu1) / Number(nu2)
        }
        resultado = Number(nu1) / Number(nu2)

    }else{
        console.log('ERRO. A Operação Escolhida é Inválida')
    }
    */

    // Forma alternativa de fazer condicional ( mais simples ):
    switch (tipoDeCauculo.toUpperCase()) {
        case 'SOMAR':
            resultado = Number(nu1) + Number(nu2)
            break;
    
        case 'SUBTRAIR':
            resultado = Number(nu1) - Number(nu2)
            break;

        case 'MULTIPLICAR':
            resultado = Number(nu1) * Number(nu2)
            break;

        case 'DIVIDIR':
            if(nu2 == 0){
                console.log('Erro. Divisão por zero não é permitida.')
            
            }else{
                resultado = Number(nu1) / Number(nu2)
            }
            break;

        default:
            console.log('ERRO. A Operação Escolhida é Inválida')
            break;
    }

    if (resultado != undefined){
        return resultado.toFixed(2)

    } else{
        return false

    }
}

// Torna a função publica:
module.exports = {
    calculadora
}
