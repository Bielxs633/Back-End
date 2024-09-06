/**
 * 
 *  Objetivo: Desenvolver uma aplicação para a empresa - Viva Moda
 *      -> sistema para calcular os juros compostos de uma venda parcelada
 *  Data: 09/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

//Importar a biblioteca readline.
const readline = require('readline');

//Criar interface para entrada de dados.
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função para calcular o montante final com juros compostos.
//Math.pow -> (base, expoente) retorna o valor de base elevado à potência de expoente. Por exemplo: Math.pow(2, 3) calcula 2 elevado a 3.
const calcularMontanteFinal = (P, r, n, t) => P * Math.pow(1 + r / 100 / n, n * t);

//Solicitar dados ao usuário.
entradaDados.question('Capital inicial (P): ', (capital) => {
    entradaDados.question('Taxa de juros anual (%) (r): ', (taxa) => {
        entradaDados.question('Número de vezes que os juros são compostos por ano (n): ', (compostos) => {
            entradaDados.question('Tempo em anos (t): ', (tempo) => {
                
                const P = parseFloat(capital);
                const r = parseFloat(taxa);
                const n = parseInt(compostos);
                const t = parseFloat(tempo);

                //Verificar se todos os valores são válidos.
                //!isNaN -> determinar se um valor não é um número (NaN é uma abreviação para "Not-a-Number"). Ela retorna true se o valor for NaN e false caso contrário.
                //toFixed -> formatar um número em uma representação de string com um número específico de casas decimais.
                if (!isNaN(P) && !isNaN(r) && !isNaN(n) && !isNaN(t)) {
                    console.log(`Montante final: R$ ${calcularMontanteFinal(P, r, n, t).toFixed(2)}`);
                } else {
                    console.log('Entrada inválida.');
                }

                //Fechar a interface.
                entradaDados.close();
            });
        });
    });
});
