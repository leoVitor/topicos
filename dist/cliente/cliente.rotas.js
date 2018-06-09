"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const cliente_model_1 = require("./cliente.model");
class ClienteRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/cliente', (req, resp, next) => {
            cliente_model_1.Cliente.find().then(clientes => {
                resp.json(clientes);
                return next();
            });
        });
        aplicacao.post('/cliente', (req, resp, next) => {
            let cliente = new cliente_model_1.Cliente(req.body);
            cliente.save().then(cliente => {
                resp.json(cliente);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.del('/cliente/:id', (req, resp, next) => {
            cliente_model_1.Cliente.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
        aplicacao.patch('/cliente/:id', (req, resp, next) => {
            cliente_model_1.Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(cliente => {
                resp.json(cliente);
                return next();
            });
        });
    }
}
exports.clienteRotas = new ClienteRotas;
