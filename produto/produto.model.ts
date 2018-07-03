import mongoose from 'mongoose'

export interface Produto extends mongoose.Document{
    nome:string,
    valor:number, //Valor de venda 
}

const produtoSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    valor:{
        type:Number
    }
})

export const Produto = mongoose.model<Produto>('Produto',produtoSchema) 