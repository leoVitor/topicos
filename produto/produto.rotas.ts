import * as restify from 'restify'
import {Rotas} from "../comum/rotas"
import {Produto} from './produto.model'

class ProdutoRotas extends Rotas{
    aplicarRotas(aplicacao: restify.Server){
        aplicacao.get('/produto',(req, resp, next)=>{
            Produto.find().then(produtos=>{
                resp.json(produtos)
                return next()
            })
        })
        aplicacao.post('/produto',(req, resp ,next)=>{
            let produto = new Produto  (req.body)

            produto.save().then(produto=>{
                resp.json(produto)
            },err =>{
                console.log(err) 
            })
            return next ()
        })
        aplicacao.del('/produto/:id',(req,resp,next)=>{
            Produto.remove({_id: req.params.id}).exec().then((result:any)=>{
                if(result.n)
                    resp.send(204)
                else
                resp.send(404)
                return next()
            })
        })
        aplicacao.patch('/produto/:id',(req,resp,next)=>{
            Produto.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true}).then(produto=>{
                resp.json(produto)
                return next()
            })
        })
    }
}
export const produtoRotas = new ProdutoRotas