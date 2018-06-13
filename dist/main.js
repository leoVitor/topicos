"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const fonecedor_rotas_1 = require("./fornecedor/fonecedor.rotas");
const cliente_rotas_1 = require("./cliente/cliente.rotas");
const produto_rotas_1 = require("./produto/produto.rotas");
const veiculo_rotas_1 = require("./veiculo/veiculo.rotas");
const venda_rotas_1 = require("./venda/venda.rotas");
const vendedor_rotas_1 = require("./vendedor/vendedor.rotas");
const server = new server_1.Server();
server.inicializar([fonecedor_rotas_1.fornecedorRotas, cliente_rotas_1.clienteRotas, produto_rotas_1.produtoRotas, veiculo_rotas_1.veiculoRotas, venda_rotas_1.vendaRotas, vendedor_rotas_1.vendedorRotas]).then(server => {
    console.log(`Seu ctrl-C + ctrl-V deu certo Servidor executando na porta ${server.aplicacao.address().port}`);
}).catch(error => {
    console.log("Servidor deu prego veja o erro seu baitola");
    console.error(error);
    process.exit(1);
});
