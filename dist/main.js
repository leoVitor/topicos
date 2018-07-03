"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const fonecedor_rotas_1 = require("./fornecedor/fonecedor.rotas");
const cliente_rotas_1 = require("./cliente/cliente.rotas");
const produto_rotas_1 = require("./produto/produto.rotas");
const veiculo_rotas_1 = require("./veiculo/veiculo.rotas");
const venda_rotas_1 = require("./venda/venda.rotas");
const vendedor_rotas_1 = require("./vendedor/vendedor.rotas");
const transportadora_rotas_1 = require("./transportadora/transportadora.rotas");
const estoque_rota_1 = require("./estoque/estoque.rota");
const server = new server_1.Server();
server.inicializar([fonecedor_rotas_1.fornecedorRotas, cliente_rotas_1.clienteRotas, produto_rotas_1.produtoRotas, veiculo_rotas_1.veiculoRotas, venda_rotas_1.vendaRotas, vendedor_rotas_1.vendedorRotas, transportadora_rotas_1.transportadoraRotas, estoque_rota_1.estoqueRotas]).then(server => {
    console.log(`Háaaa Miseravi acertouuuu ele rodou ${server.aplicacao.address().port}`);
}).catch(error => {
    console.log("Um ameaça foi detectado");
    console.error(error);
    process.exit(1);
});
