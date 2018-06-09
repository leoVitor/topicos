"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const fonecedor_rotas_1 = require("./fornecedor/fonecedor.rotas");
const cliente_rotas_1 = require("./cliente/cliente.rotas");
const produto_rotas_1 = require("./produto/produto.rotas");
const server = new server_1.Server();
server.inicializar([fonecedor_rotas_1.fornecedorRotas, cliente_rotas_1.clienteRotas, produto_rotas_1.produtoRotas]).then(server => {
    console.log(`Servidor executando na porta ${server.aplicacao.address().port}`);
}).catch(error => {
    console.log("Servidor não inicializou");
    console.error(error);
    process.exit(1);
});
