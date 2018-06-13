import {Server} from './server/server'
import {fornecedorRotas} from './fornecedor/fonecedor.rotas'
import {clienteRotas} from './cliente/cliente.rotas'
import {produtoRotas} from './produto/produto.rotas'
import {veiculoRotas} from './veiculo/veiculo.rotas'
import {vendaRotas} from './venda/venda.rotas'
import {vendedorRotas} from './vendedor/vendedor.rotas'



const server:Server = new Server();

server.inicializar([fornecedorRotas,clienteRotas,produtoRotas,veiculoRotas,vendaRotas,vendedorRotas]).then(server =>{
    console.log(`Seu ctrl-C + ctrl-V deu certo Servidor executando na porta ${server.aplicacao.address().port}`)
}).catch(error =>{
    console.log("Servidor deu prego veja o erro seu baitola")
    console.error(error)
    process.exit(1)
})