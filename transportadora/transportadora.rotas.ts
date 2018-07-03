import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Transportadora} from "../transportadora/transportadora.model"

class TransportadoraRotas extends Rotas{
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/transportadora',(req,resp,next)=>{
            Transportadora.find().then(transportadoras =>{
                resp.json(transportadoras)
                return next()
            })
        })
        aplicacao.post('/transportadora',(req,resp,next)=>{
            let transportadora = new Transportadora (req.body)

            transportadora.save().then(transportadora=>{
                resp.json(transportadora)
            },err =>{
                console.log(err)
            })
            return next()
        })
        aplicacao.patch('/transportadora/:id',(req,resp,next)=>{
            Transportadora.findByIdAndUpdate({_id: req.params.id},req.body,{new:true}).then(transportadora=>{
                resp.json(transportadora)
                return next()
            })
        })
        aplicacao.del('/transportadora/:id',(req,resp,next)=>{
            Transportadora.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
    }
}
export const transportadoraRotas = new TransportadoraRotas