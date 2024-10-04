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

const comandosBasicos = function(){

    //! Primeira forma de criar Array:

    let listaDeNomes = ['Gabriel', 'Giovanna', 'Israel', 'Duda', 13, true]

    // Exibe os dados do Array:
    console.log(listaDeNomes)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeNomes)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeNomes[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    console.log(typeof(listaDeNomes[5]))
    console.log(typeof(listaDeNomes))

    console.log('*****************************************************************************************************')

//======================================================================================================================

    //! Segunda forma de criar um Array:

    let listaDeDiciplinas = []

    listaDeDiciplinas[0] = 'Back-End'
    listaDeDiciplinas[1] = 'Front-End'
    listaDeDiciplinas[2] = 'Banco de Dados'
    listaDeDiciplinas[3] = 'Projetos'
    listaDeDiciplinas[4] = 'Requisitos'
    listaDeDiciplinas[5] = 'Redes'

    // Exibe os dados do Array:
    console.log(listaDeDiciplinas)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeDiciplinas)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeDiciplinas[1])
    // Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeDiciplinas[5]))
    //-> do Array em si:
    console.log(typeof(listaDeDiciplinas))

    console.log('*****************************************************************************************************')

//======================================================================================================================

    //! Terceira forma de criar um Array:

    let listaDeProdutos = []

    // .push -> Adiciona o novo elementono final da lista:
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('HD')
    listaDeProdutos.push('Memória')
    listaDeProdutos.push('Caixa de Som')
    listaDeProdutos.push('Placa de Video')

    listaDeProdutos.push('Scanner', 'Processador', 'SSD', 'Placa de Som')

    listaDeProdutos.push('Impressora')

    // Exibe os dados do Array:
    console.log(listaDeProdutos)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeProdutos)
     // Exibe o conteudo de um determinado indice:
    console.table(listaDeProdutos[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeProdutos[5]))
    //-> do Array em si:
    console.log(typeof(listaDeProdutos))

    console.log('*****************************************************************************************************')

//----------------------------------------------------------------------------------------------------------------------
    
    // .unshift -> Adiciona um novo elemento no começo da lista & Reorganiza todos os indices:
    listaDeProdutos.unshift('Placa mãe')

    // Exibe os dados do Array:
    console.log(listaDeProdutos)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeProdutos)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeProdutos[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeProdutos[5]))
    //-> do Array em si:
    console.log(typeof(listaDeProdutos))

    console.log('*****************************************************************************************************')

//----------------------------------------------------------------------------------------------------------------------

    // Remove o primeiro elemento da lista & Reorganiza todos os ondices:
    listaDeProdutos.shift()

    // Exibe os dados do Array:
    console.log(listaDeProdutos)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeProdutos)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeProdutos[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeProdutos[5]))
    //-> do Array em si:
    console.log(typeof(listaDeProdutos))

    console.log('*****************************************************************************************************')

//----------------------------------------------------------------------------------------------------------------------

    // Remove o ultimo elemento da lista:
    listaDeProdutos.pop()

    // Exibe os dados do Array:
    console.log(listaDeProdutos)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeProdutos)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeProdutos[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeProdutos[5]))
    //-> do Array em si:
    console.log(typeof(listaDeProdutos))

    console.log('*****************************************************************************************************')

//---------------------------------------------------------------------------------------------------------------------- 

    // Remove elementos da lista atravez de um determinado indice (Podendo remover mais de um item):
        // primeiro digito escolhe o indice e o segundo é o quanto remove:
    listaDeProdutos.splice(3,1)

    // Exibe os dados do Array:
    console.log(listaDeProdutos)
    // Exibe os dados do Arrey em formato de tabela:
    console.table(listaDeProdutos)
    // Exibe o conteudo de um determinado indice:
    console.table(listaDeProdutos[1])
    // comando Typeof -> permite identificar os tipos de dados dos elementos do Array:
    //-> de um determinado indice>:
    console.log(typeof(listaDeProdutos[5]))
    //-> do Array em si:
    console.log(typeof(listaDeProdutos))

    console.log('*****************************************************************************************************')

//======================================================================================================================

    // Retorna / Devolve a quantidade de elementos de um Array:
    console.log(listaDeProdutos.length)

    console.log('*****************************************************************************************************')

}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const percorrerArray = function(){

    let listaDeClientes = []

    listaDeClientes.push('José', 'Maria', 'Antonio', 'Ana', 'Luiz', 'Ricardo', 'Andressa')

    // Exemplo usando o WHILE:
    let contador = 0
    console.log('========== While ==========')
    while(contador < listaDeClientes.length){
        console.log(listaDeClientes[contador])
        contador += 1
    }

    // Exemplo usando o FOR:
    console.log('========== For ==========')
    for(let contador = 0; contador < listaDeClientes.length; contador++){
        console.log(listaDeClientes[contador])
    }

    // Exemplo usando o FOREACH:
    // ForEach() -> permite percorrer um objeto Array, pegando cada elemento da lista e retornando atravez de uma função de call back
    console.log('========== ForEach ==========')
    listaDeClientes.forEach(function(item){
        console.log(item)
    })

    console.log('*****************************************************************************************************')

}    

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const filtroProduto = function(nomeProduto){
    let produto = String(nomeProduto).toUpperCase()
    let status = false
    let listaDeProdutos = []
    listaDeProdutos.push(
                            'Monitor',
                            'Teclado',
                            'Mouse',
                            'Caixa de Som',
                            'Placa de Video',
                            'Placa Mae',
                            'HD',
                            'SSD',
                            'Impressora',
                            'Memoria',
                        )

    // listaDeProdutos.forEach(function(item){
    //     if(produto == String(item).toUpperCase()){
    //         status = true
    //     }
    // })

    // // includes() -> permite encontrar um item dentro do array, retorna true ou false: 
    // listaDeProdutos.forEach(function(item){
    //     if(String(item).toUpperCase().includes(produto)){
    //         status = true
    //     }
    // })

    // indexOf() -> permite localizar um item no array, retorna -1 se não encontrar e um numero >= 0 se encpontrar o item: 
    listaDeProdutos.forEach(function(item){
        if(String(item).toUpperCase().indexOf(produto) >= 0){
           status = true 
        }
    })

    console.log('*****************************************************************************************************')

    return status

}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//# comandosBasicos()
//# percorrerArray()
//# console.log(filtroProduto('processador'))
