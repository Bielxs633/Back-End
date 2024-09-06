/**
 * 
 *  Objetivo:  Desenvolver uma aplicação para a empresa - Cálculos SA
 *      ->sistema para calcular as principais operações matemáticas ( SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO. )
 *  Data: 23/08/24
 *  Autor: Gabriel
 *  Versão: 1.1
 * 
 **/

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/// Função para validar se o valor de entrada é um número e não está vazio
function validarNumero(entrada) {
    // Substitui a vírgula por ponto
    var entradaFormatada = entrada.replace(',', '.');
    var numero = parseFloat(entradaFormatada);

    if (entradaFormatada.trim() === '' || isNaN(numero)) {
        console.log(`===========================================  \n|Erro: Por favor, insira um número válido.  \n===========================================`);
        
        return null;
    }
    return numero;
}

// Função para realizar a operação matemática
function calcular(operacao, nu1, nu2) {
    if (operacao === '1') {
        return nu1 + nu2;

    } else if (operacao === '2') {
        return nu1 - nu2;

    } else if (operacao === '3') {
        return nu1 * nu2;

    } else if (operacao === '4') {
        if (nu2 === 0) {
            console.log('========================================  \n|Erro: Divisão por zero não é permitida. \n|       --Resultado Indefinido--  \n========================================');

            return null;
        }

        return nu1 / nu2;
        
    } else {
        console.log('================================================================  \nErro: Operação inválida. Por favor, escolha uma operação válida.  \n================================================================');

        return null;
    }
}

entradaDeDados.question('|Digite o primeiro número: ', function(entrada1) {
    let nu1 = validarNumero(entrada1);

    if (nu1 === null) {
        
        entradaDeDados.close();

        return;
    }

    entradaDeDados.question('|Digite o segundo número: ', function(entrada2) {
        let nu2 = validarNumero(entrada2);

        if (nu2 === null) {
            
            entradaDeDados.close();
            
            return;
        }

        /*
        console.log('Escolha a operação:');
        console.log('1 - Soma');
        console.log('2 - Subtração');
        console.log('3 - Multiplicação');
        console.log('4 - Divisão');
        */
       
        console.log(`|=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=  \n| Escolha a Operação:  \n| 1 - Soma  \n| 2 - Subtração  \n| 3 - Multiplicação  \n| 4 - Divisão  \n|=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)

        entradaDeDados.question('Digite o número da operação desejada: ', function(operacao) {
            if (!['1', '2', '3', '4'].includes(operacao)) {
                console.log('================================================================  \nErro: Operação inválida. Por favor, escolha uma operação válida.  \n================================================================');
                entradaDeDados.close();

                return;
            }

            let resultado = calcular(operacao, nu1, nu2);

            if (resultado !== null) {
                //# console.log(`O resultado da operação é: ${resultado.toFixed(2)}`);
                console.log(`|=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=  \n| O resultado da operação é:  \n| ---> ${resultado.toFixed(2)} <---  \n|=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);  
            }

            entradaDeDados.close();

        });
    });
});
