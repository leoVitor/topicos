import * as restify from 'restify'
import {Rotas} from '../comum/rotas'
import {Vendedor} from '../vendedor/vendedor.model'
import { vendaRotas } from '../venda/venda.rotas'

class VendedorRotas extends Rotas{
    aplicarRotas(aplicacao:restify.Server){
        aplicacao.get('/vendedor',(req,resp,next)=>{
            Vendedor.find().then(vendedor=>{
                resp.json(vendedor)
                return next()
            })
        })
        aplicacao.post('/vendedor',(req,resp,next)=>{
            let vendedor = new Vendedor (req.body)
            vendedor.save().then(vendedor=>{
                resp.json(vendedor)
            },err =>{
                console.log(err)
            })
            return next()
        })
        aplicacao.patch('/vendedor/:id',(req,resp,next)=>{
            Vendedor.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true}).then(vendedor=>{
                resp.json(vendedor)
                return next()
            })
        })
        aplicacao.del('/vendedor/:id',(req,resp,next)=>{
            Vendedor.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
    }
}
export const vendedorRotas = new VendedorRotas