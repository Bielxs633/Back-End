/**
 * 
 *  Objetivo: sistema que gerencie números pares e ímpares
 *  Data: 08/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

function gerenciarNumeros(inicial, final) {

    //Validação de entrada vazia:
    if (inicial == '' || final == ''){
        return '============================================ \n' +
               '|ERRO. As entradas devem ser preenchidas. \n' +
               '============================================';
    }

    //Validação de caracteres inválidos:
    if (isNaN(inicial) || isNaN(final)){
        return '=============================================== \n' +
               '|ERRO. As entradas devem ser números válidos. \n' +
               '===============================================';
    }

    //Converter as entradas para números inteiros:
    inicial = parseInt(inicial, 10);
    final = parseInt(final, 10);

    //Validação de valores não permitidos:
    if (inicial < 1 || inicial > 500){
        return '=================================================== \n' +
               '|ERRO. O número inicial deve estar entre 0 e 500. \n' +
               '===================================================';
    }

    if (final < 100 || final > 1000){
        return '==================================================== \n' +
               '|ERRO. O número final deve estar entre 100 e 1000. \n' +
               '====================================================';
    }

    if (inicial >= final){
        return '============================================================ \n' +
               '|ERRO. O número inicial deve ser menor que o número final. \n' +
               '============================================================';
    }

    if (inicial == final){
        return '================================================================ \n' +
               '|ERRO. O número inicial e o número final não podem ser iguais. \n' +
               '================================================================';
    }

    //Função para listar números pares e ímpares:
    function listarNumeros(inicial, final){
        let pares = '' 
        let impares = ''
        let quantPares = 0
        let quantImpares = 0

        //Loop para identificar e separar os números pares e ímpares:
        for (let num = inicial; num <= final; num++){
            if (num % 2 == 0){
                pares += (quantPares > 0 ? ', ' : '') + num  //Concatenar com vírgula entre números;
                quantPares++

            }else{
                impares += (quantImpares > 0 ? ', ' : '') + num
                quantImpares++
            }
        }

        return{
            pares: {lista: pares, quantidade: quantPares},
            impares: {lista: impares, quantidade: quantImpares}
        }
    }

    //Gerar listas de pares e ímpares:
    let {pares, impares} = listarNumeros(inicial, final)

    let resultado = `===========================\n` +
                    `  *** RESULTADO FINAL *** \n` +
                    `===========================\n` +
                    `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n` +
                    ` Números Pares: [ ${pares.lista} ] \n` +
                    ` Quantidade de Pares: ${pares.quantidade} \n` +
                    `-------------------------------------\n` +
                    ` Números Ímpares: [ ${impares.lista} ] \n` +
                    ` Quantidade de Ímpares: ${impares.quantidade} \n` +
                    `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`

    return resultado
}

//# console.log(gerenciarNumeros(1, 1000))

// Exportar a função:
module.exports = {
    gerenciarNumeros
}
