"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const produto_model_1 = require("./produto.model");
class ProdutoRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/produto', (req, resp, next) => {
            produto_model_1.Produto.find().then(produtos => {
                resp.json(produtos);
                return next();
            });
        });
        aplicacao.post('/produto', (req, resp, next) => {
            let produto = new produto_model_1.Produto(req.body);
            produto.save().then(produto => {
                resp.json(produto);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.del('/produto/:id', (req, resp, next) => {
            produto_model_1.Produto.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
        aplicacao.patch('/produto/:id', (req, resp, next) => {
            produto_model_1.Produto.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(produto => {
                resp.json(produto);
                return next();
            });
        });
    }
}
exports.produtoRotas = new ProdutoRotas;
