"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const transportadora_model_1 = require("../transportadora/transportadora.model");
class TransportadoraRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/transportadora', (req, resp, next) => {
            transportadora_model_1.Transportadora.find().then(transportadoras => {
                resp.json(transportadoras);
                return next();
            });
        });
        aplicacao.post('/transportadora', (req, resp, next) => {
            let transportadora = new transportadora_model_1.Transportadora(req.body);
            transportadora.save().then(transportadora => {
                resp.json(transportadora);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.patch('/transportadora/:id', (req, resp, next) => {
            transportadora_model_1.Transportadora.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(transportadora => {
                resp.json(transportadora);
                return next();
            });
        });
        aplicacao.del('/transportadora/:id', (req, resp, next) => {
            transportadora_model_1.Transportadora.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
    }
}
exports.transportadoraRotas = new TransportadoraRotas;
