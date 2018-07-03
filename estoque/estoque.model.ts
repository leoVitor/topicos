import mongoose from 'mongoose'

export interface Estoque extends mongoose.Document{
    _id:object,
    produto:object,
    armazem:number,
    qtd:string,
}

const estoqueSchema = new mongoose.Schema({
    produto:{
        type: mongoose.Schema.Types.ObjectId
    },
    armazem:{
        type:Number
    },
    qtd:{
        type:String
    }
})

export const Estoque = mongoose.model<Estoque>('Estoque',estoqueSchema) 