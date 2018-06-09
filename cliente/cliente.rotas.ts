import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Cliente} from "./cliente.model"

class ClienteRotas extends Rotas {
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/cliente', (req,resp, next)=>{
            Cliente.find().then(clientes=>{
                resp.json(clientes)
                return next()
            })
        })
        aplicacao.post('/cliente',(req,resp,next)=>{
            let cliente = new Cliente (req.body)

            cliente.save().then(cliente =>{
                resp.json(cliente)
            },err =>{
                console.log(err)
            })
            return next()
        })
        aplicacao.del('/cliente/:id',(req,resp,next)=>{
            Cliente.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
        aplicacao.patch('/cliente/:id',(req,resp,next)=>{
            Cliente.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then(cliente=>{
                resp.json(cliente)
                return next()
            })
        })
    }
}
export const clienteRotas = new ClienteRotas