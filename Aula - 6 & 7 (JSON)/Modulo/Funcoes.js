/**
 * 
 *  Objetivo: Manipular dados utilizando a estrutura de ARRAY e JSON
 *  Data: 27/09/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

/**
 * 
 * Array -> [ ] - Estrutura para armazenar um conjunto de dados
 * Json -> { } - É uma estrutura de dados para organizar os dados 
 * 
 **/

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const conceitosJSON = function(){

    //! Primeira forma de criar JSON:

    let cliente = {nome: 'Gabriel Soares', telefone:'40028922', email:'gabriel.soares@gmail.com'}

    console.log(cliente)
    console.table(cliente)

    console.log('*****************************************************************************************************')

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    //! Segunda forma de criar JSON:

    let cliente2 = {}
    cliente2.nome = 'Giovanna Xavier'
    cliente2.telefone = '123456789'
    cliente2.email = 'giovanna.xavier@gmail.com'

    console.log(cliente2)
    console.table(cliente2)

    console.log(cliente2.nome)
    console.log(cliente2.email)

    console.log('*****************************************************************************************************')

//----------------------------------------------------------------------------------------------------------------------

    let listaDeClientes = []
    listaDeClientes.push(cliente, cliente2)

    console.log(listaDeClientes)
    console.table(listaDeClientes)

    console.log(listaDeClientes[1].nome)

    console.log('*****************************************************************************************************')

//----------------------------------------------------------------------------------------------------------------------

    //# let cliente3 = {nome: 'Israel JR', telefone:'987654321', email: 'israel.jr@gmail.com'}
    let cliente3 = {}
    cliente3.nome = 'Israel Junior'
    cliente3.telefone = '987654321'
    cliente3.email = 'israel.junior@gmail.com'

    listaDeClientes.push(cliente3)

    listaDeClientes.forEach(function(item){
        console.log(item.nome)
    })

    console.log('*****************************************************************************************************')
    
}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const cadastroProdutos = function(){
    let listaDeCores = [
                            {nome: 'Branco', hexadecimal:'#ffffff'},
                            {nome: 'Preto', hexadecimal:'#000000'},
                            {nome: 'Cinza', hexadecimal:'#575757'},
                            {nome: 'Branco', hexadecimal:'#ff0000'},
                            {nome: 'verde', hexadecimal:'#00ff00'},
                            {nome: 'Azul', hexadecimal:'#0000ff'}
                        ]
}

let listaDeCategorias = [
                            {nome: 'Hardware'},
                            {nome: 'Periférico'},
                            {nome: 'Software'},
                            {nome: 'Acessórios'},
                            {nome: 'Games'},
                        ]

conceitosJSON()
