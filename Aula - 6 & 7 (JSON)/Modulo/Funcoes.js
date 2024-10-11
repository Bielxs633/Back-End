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


let listaDeCategorias = [
                            {nome: 'Hardware'},
                            {nome: 'Periférico'},
                            {nome: 'Software'},
                            {nome: 'Acessórios'},
                            {nome: 'Games'},
                        ]

let listaDeMarcas = [
                        {
                            nome: 'Dell Computadores',
                            telefone: '987654321',
                            email: 'dell@.com.br',
                        },
                        {
                            nome: 'Microsoft Tecnologia',
                            telefone: '123456789',
                            email: 'microsoft@.com.br',
                        },
                        {
                            nome: 'Logitech',
                            telefone: '40028922',
                            email: 'logitech@.com.br',
                        },
                        {
                            nome: 'Apple',
                            telefone: '22982004',
                            email: 'apple@.com.br',
                        },
                    ]

let listaDeProdutos = [
                        {
                            nome: 'Mouse',
                            descricao: 'Mouse com fio',
                            quantidade: 50,
                            preco: '60',
                            cor: listaDeCores, //? todos os indices, porque o objeto tem todas as cores:
                            marca: [
                                listaDeMarcas[0] //? apenas o indice da marca que o item é:
                            ],
                            categoria: [ //? se encaixa nesses indices:
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                                listaDeCategorias[4],
                            ],
                        },
                        {
                            nome:'Teclado',
                            descricao: 'Teclado RGB com fio',
                            quantidade: 32,
                            preco: '100',
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                            ],
                            marca: [
                                listaDeMarcas[2],
                            ],
                            categoria: [
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                                listaDeCategorias[4],
                            ],
                        },
                        {
                            nome: 'Gabinete',
                            descricao: 'Gabinete Torre',
                            quantidade: 20,
                            preco: '55',
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                            ],
                            marca: [
                                listaDeMarcas[1],
                            ],
                            categoria: [
                                listaDeCategorias[4],
                            ],
                        },
                        {
                            nome: 'Mouse',
                            descricao: 'Mouse RGB sem fio',
                            quantidade: 37,
                            preco: '80',
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                            ],
                            marca: [
                                listaDeMarcas[3]
                            ],
                            categoria: [
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                                listaDeCategorias[4],
                            ],
                        },
                        {
                            nome: 'Monitor',
                            descricao: '4K',
                            quantidade: 12,
                            preco: '700',
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                            ],
                            marca: [
                                listaDeMarcas[3],
                            ],
                            categoria: [
                                listaDeCategorias[0],
                                listaDeCategorias[1],
                            ],
                        },
                        {
                            nome: 'Fone',
                            descricao: 'Fone com fio',
                            quantidade: 70,
                            preco: '25',
                            cor: listaDeCores,
                            marca: [
                                listaDeMarcas[0],
                            ],
                            categoria: [
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                            ],
                        },
                        {
                            nome: 'Fone',
                            descricao: 'Fone sem fio gamer',
                            quantidade: 50,
                            preco: '65',
                            cor: listaDeCores,
                            marca: [
                                listaDeMarcas[2],
                            ],
                            categoria: [
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                                listaDeCategorias[4],
                            ], 
                        },
                        {
                            nome: 'Placa de Vídeo',
                            descricao: 'gera uma saída de alimentação de imagens para um dispositivo de exibição',
                            quantidade: 30,
                            preco: '78',
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                            ],
                            marca: [
                                listaDeMarcas[3],
                            ],
                            categoria: [
                                listaDeCategorias[1],
                                listaDeCategorias[3],
                                listaDeCategorias[4],
                            ], 
                        },
                    ]

return listaDeProdutos

//# console.log(listaDeProdutos)
//# console.table(listaDeProdutos)
//# console.log(listaDeProdutos[0].cor) //? para mostrar todas as cores desde o indice 0 que estão dentro de cor:

}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const pesquisaDeProdutos = function(nome){
    let nomeProduto = String(nome).toUpperCase()
    let produtos = cadastroProdutos()
    let produtosEncontrados = []
    
    produtos.forEach(function(item){
        if(String(item.nome).toUpperCase().includes(nomeProduto)){
            produtosEncontrados.push(item)
        }
    })

    if(produtosEncontrados.length > 0){
        return produtosEncontrados
    
    }else{
        return false
    }
}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const listarProdutos = function(nome){
    let produtos = pesquisaDeProdutos(nome)

    if(produtos != false){
        produtos.forEach(function(item){
            console.log(`=======================================================`)
            console.log(`Nome do Produto: ${item.nome}`)
            console.log(`Descrição do Produto: ${item.descricao}`)
            console.log(`Quantidade em Estoque: ${item.quantidade}`)
            console.log(`Preço do Produto: ${item.preco}`)
            console.log(`=======================================================`)

            item.cor.forEach(function(itemCor){
                console.log(`-- Cor do Produto: ${itemCor.nome}`)
            })

            item.marca.forEach(function(itemMarca){
                console.log(`-- Marca do Produto: ${itemMarca.nome}`)
            })

            item.categoria.forEach(function(itemCategoria){
                console.log(`-- Categoria do Produto: ${itemCategoria.nome}`)
            })
        })
    }
}

//=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//# conceitosJSON()
//# cadastroProdutos()
//# console.log(pesquisaDeProdutos(''))
//# listarProdutos('fone')
