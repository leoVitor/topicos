import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Fornecedor} from './fornecedor.model'

    class FornecedorRotas extends Rotas{
        aplicarRotas(aplicacao: restify.Server) {
            aplicacao.get('/fornecedor', (req, resp, next)=>{
                Fornecedor.find().then(fornecedores =>{
                    resp.json(fornecedores)
                    return next()
                })
            })
            aplicacao.post('/fornecedor',(req,resp,next)=>{
                let fornecedor = new Fornecedor (req.body)

                fornecedor.save().then(fornecedor =>{
                    resp.json(fornecedor)
                },err =>{
                    console.log(err)
                })
                return next()
            })
        }   
    }

export const fornecedorRotas = new FornecedorRotas