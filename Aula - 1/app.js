/**
 * 
 *  Objetivo: Conhecer os primeiros comandos de JS no node.JS
 *  Data: 02/08/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

/**
 * 
 * Formas de criar variaveis em JS:
 *  
 *  var -> Permite criar um espaço em memória, podendo ser alterado no decorrer do projeto, essa variavel deve ser criada no escopo Global do código;
 *      --> ou seja, ela existe em todos os blocos de programação.
 * 
 *  let -> Permite criar um espaço em memória, podendo ser alterado no decorrer do projeto, essa variavel deve ser criada no escopo Local do código;
 *      --> ou seja, ela nasce e morre dentro daquele bloco de programação.
 * 
 *  const -> Permite criar um espaço em memória, e não pode ser alterado no decorrer do projeto,ela pode ser criada no escopo Global ou Local;
 * 
 **/

//Permite escerver uma mensagem no terminal.
console.log('Exercício 01 de Node.JS')

var nome = 'Gabriel'
var Valor_1 = '10'
var Valor_2 = '20.5'
var Resultado 

//Concatenar -> Juntar Conteudos.
console.log('O nome de usuário é: ' + nome)

//Permite identificar o tipo de dados de uma variavel.
console.log(typeof(nome))

/**
 * 
 * Conversão de Dados:
 * 
 *  parseInt() -> converte uma String em numero Inteiro;
 * 
 *  parseFloat() -> converte uma String em numero Real;
 * 
 *  Number() -> converte uma String em numero Interiro ou Real conforme a necessidade;
 * 
 **/

Resultado = parseFloat(Valor_1) + parseFloat(Valor_2)

console.log(Resultado)
