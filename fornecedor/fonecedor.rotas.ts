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
            aplicacao.del('/fornecedor/:id',(req,resp,next)=>{
                Fornecedor.remove({_id: req.params.id}).exec().then((result:any)=>{
                    if(result.n)
                        resp.send(204)
                    else
                    resp.send(404)
                    return next()
                })
            })
            aplicacao.patch('/fornecedor/:id',(req,resp,next)=>{
                Fornecedor.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then(fornecedor=>{
                    resp.json(fornecedor)
                    return next()
                })
            })
        
        }   
    }

export const fornecedorRotas = new FornecedorRotas