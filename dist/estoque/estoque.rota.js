"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const estoque_model_1 = require("./estoque.model");
class EstoqueRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/estoque', (req, resp, next) => {
            estoque_model_1.Estoque.find().then(estoques => {
                resp.json(estoques);
                return next();
            });
        });
        aplicacao.post('/estoque', (req, resp, next) => {
            let estoque = new estoque_model_1.Estoque(req.body);
            estoque.save().then(estoque => {
                resp.json(estoque);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.del('/estoque/:id', (req, resp, next) => {
            estoque_model_1.Estoque.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
        aplicacao.patch('/estoque/:id', (req, resp, next) => {
            estoque_model_1.Estoque.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(estoque => {
                resp.json(estoque);
                return next();
            });
        });
    }
}
exports.estoqueRotas = new EstoqueRotas;
