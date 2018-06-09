import {Server} from './server/server'
import {fornecedorRotas} from './fornecedor/fonecedor.rotas'
import {clienteRotas} from './cliente/cliente.rotas'
import {produtoRotas} from './produto/produto.rotas'


const server:Server = new Server();

server.inicializar([fornecedorRotas,clienteRotas,produtoRotas]).then(server =>{
    console.log(`Servidor executando na porta ${server.aplicacao.address().port}`)
}).catch(error =>{
    console.log("Servidor não inicializou")
    console.error(error)
    process.exit(1)
})