import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Estoque} from "./estoque.model"

class EstoqueRotas extends Rotas {
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/estoque', (req,resp, next)=>{
            Estoque.find().then(estoques=>{
                resp.json(estoques)
                return next()
            })
        })
        aplicacao.post('/estoque',(req,resp,next)=>{
            let estoque = new Estoque (req.body)

            estoque.save().then(estoque =>{
                resp.json(estoque)
            },err =>{
                console.log(err)
            })
            return next()
        })
        aplicacao.del('/estoque/:id',(req,resp,next)=>{
            Estoque.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
        aplicacao.patch('/estoque/:id',(req,resp,next)=>{
            Estoque.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then(estoque=>{
                resp.json(estoque)
                return next()
            })
        })
    }
}
export const estoqueRotas = new EstoqueRotas