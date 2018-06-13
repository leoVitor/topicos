"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotas_1 = require("../comum/rotas");
const veiculo_model_1 = require("../veiculo/veiculo.model");
class VeiculoRotas extends rotas_1.Rotas {
    aplicarRotas(aplicacao) {
        aplicacao.get('/veiculo', (req, resp, next) => {
            veiculo_model_1.Veiculo.find().then(veiculos => {
                resp.json(veiculos);
                return next();
            });
        });
        aplicacao.post('/veiculo', (req, resp, next) => {
            let veiculo = new veiculo_model_1.Veiculo(req.body);
            veiculo.save().then(veiculo => {
                resp.json(veiculo);
            }, err => {
                console.log(err);
            });
            return next();
        });
        aplicacao.patch('/veiculo/:id', (req, resp, next) => {
            veiculo_model_1.Veiculo.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(veiculo => {
                resp.json(veiculo);
                return next();
            });
        });
        aplicacao.del('/veiculo/:id', (req, resp, next) => {
            veiculo_model_1.Veiculo.remove({ _id: req.params.id }).exec().then((result) => {
                if (result.n)
                    resp.send(204);
                else
                    resp.send(404);
                return next();
            });
        });
    }
}
exports.veiculoRotas = new VeiculoRotas;
