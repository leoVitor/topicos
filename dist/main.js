"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const fonecedor_rotas_1 = require("./fornecedor/fonecedor.rotas");
const server = new server_1.Server();
server.inicializar([fonecedor_rotas_1.fornecedorRotas]).then(server => {
    console.log(`Servidor executando na porta ${server.aplicacao.address().port}`);
}).catch(error => {
    console.log("Servidor não inicializou");
    console.error(error);
    process.exit(1);
});
