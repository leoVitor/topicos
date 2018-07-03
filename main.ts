import {Server} from './server/server'
import {fornecedorRotas} from './fornecedor/fonecedor.rotas'
import {clienteRotas} from './cliente/cliente.rotas'
import {produtoRotas} from './produto/produto.rotas'
import {veiculoRotas} from './veiculo/veiculo.rotas'
import {vendaRotas} from './venda/venda.rotas'
import {vendedorRotas} from './vendedor/vendedor.rotas'
import {transportadoraRotas} from './transportadora/transportadora.rotas'
import { estoqueRotas } from './estoque/estoque.rota';



const server:Server = new Server();

server.inicializar([fornecedorRotas,clienteRotas,produtoRotas,veiculoRotas,vendaRotas,vendedorRotas,transportadoraRotas,estoqueRotas]).then(server =>{
    console.log(`Háaaa Miseravi acertouuuu ele rodou ${server.aplicacao.address().port}`)
}).catch(error =>{
    console.log("Um ameaça foi detectado")
    console.error(error)
    process.exit(1)
})