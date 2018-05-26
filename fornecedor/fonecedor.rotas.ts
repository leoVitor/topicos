import {Rotas} from "../comum/rotas"
import * as restify from 'restify'

    class FornecedorRotas extends Rotas{
        aplicarRotas(aplicacao: restify.Server) {
            aplicacao.get('/fornecedor', (req, resp, next)=>{
                resp.json({nome:"Juliana"})
                return next();
            })
        }
    }

export const fornecedorRotas = new FornecedorRotas