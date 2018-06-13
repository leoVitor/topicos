"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const vendedor_model_1 = require("../vendedor/vendedor.model");
class VendedorRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/vendedor', (req, resp, next) => {
            vendedor_model_1.Vendedor.find().then(vendedor => {
                resp.json(vendedor);
                return next();
            });
        });
        aplicacao.post('/vendedor', (req, resp, next) => {
            let vendedor = new vendedor_model_1.Vendedor(req.body);
            vendedor.save().then(vendedor => {
                resp.json(vendedor);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.patch('/vendedor/:id', (req, resp, next) => {
            vendedor_model_1.Vendedor.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(vendedor => {
                resp.json(vendedor);
                return next();
            });
        });
        aplicacao.del('/vendedor/:id', (req, resp, next) => {
            vendedor_model_1.Vendedor.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
    }
}
exports.vendedorRotas = new VendedorRotas;
