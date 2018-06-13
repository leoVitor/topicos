import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Veiculo} from "../veiculo/veiculo.model"

class VeiculoRotas extends Rotas{
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/veiculo',(req,resp,next)=>{
            Veiculo.find().then(veiculos =>{
                resp.json(veiculos)
                return next()
            })
        })
        aplicacao.post('/veiculo',(req,resp,next)=>{
            let veiculo = new Veiculo (req.body)

            veiculo.save().then(veiculo=>{
                resp.json(veiculo)
            },err =>{
                console.log(err)
            })
            return next()
        })
        aplicacao.patch('/veiculo/:id',(req,resp,next)=>{
            Veiculo.findByIdAndUpdate({_id: req.params.id},req.body,{new:true}).then(veiculo=>{
                resp.json(veiculo)
                return next()
            })
        })
        aplicacao.del('/veiculo/:id',(req,resp,next)=>{
            Veiculo.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
    }
}
export const veiculoRotas = new VeiculoRotas