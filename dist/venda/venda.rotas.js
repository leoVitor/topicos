"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const venda_model_1 = require("./venda.model");
class VendaRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/venda', (req, resp, next) => {
            venda_model_1.Venda.find().then(vendas => {
                resp.json(vendas);
                return next();
            });
        });
        aplicacao.post('/venda', (req, resp, next) => {
            let produto = new venda_model_1.Venda(req.body);
            produto.save().then(venda => {
                resp.json(venda);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.del('/venda/:id', (req, resp, next) => {
            venda_model_1.Venda.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
        aplicacao.patch('/venda/:id', (req, resp, next) => {
            venda_model_1.Venda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(venda => {
                resp.json(venda);
                return next();
            });
        });
    }
}
exports.vendaRotas = new VendaRotas;
