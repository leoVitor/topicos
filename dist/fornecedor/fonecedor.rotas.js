"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const fornecedor_model_1 = require("./fornecedor.model");
class FornecedorRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/fornecedor', (req, resp, next) => {
            fornecedor_model_1.Fornecedor.find().then(fornecedores => {
                resp.json(fornecedores);
                return next();
            });
        });
        aplicacao.post('/fornecedor', (req, resp, next) => {
            let fornecedor = new fornecedor_model_1.Fornecedor(req.body);
            fornecedor.save().then(fornecedor => {
                resp.json(fornecedor);
            }, err => {
                console.log(err);
            });
            return next();
        });
    }
}
exports.fornecedorRotas = new FornecedorRotas;
