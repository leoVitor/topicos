import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Venda} from './venda.model'

class VendaRotas extends Rotas{
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/venda',(req, resp, next)=>{
            Venda.find().then(vendas=>{
                resp.json(vendas)
                return next()
            })
        })
        aplicacao.post('/venda',(req, resp ,next)=>{
            let produto = new Venda  (req.body)

            produto.save().then(venda=>{
                resp.json(venda)
            },err =>{
                console.log(err) 
            })
            return next ()
        })
        aplicacao.del('/venda/:id',(req,resp,next)=>{
            Venda.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
        aplicacao.patch('/venda/:id',(req,resp,next)=>{
            Venda.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then(venda=>{
                resp.json(venda)
                return next()
            })
        })
    }
}

export const vendaRotas = new VendaRotas