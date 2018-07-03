import mongoose from 'mongoose'

export interface Venda extends mongoose.Document{
    _id:object,
    fornecedor:object, //id fornecedor
    cliente:object, //id cliente
    produto:object, //id produto
    valor:number,
    qtd:number, 
}

const vendaSchema = new mongoose.Schema({
    fornecedor:{
        type: mongoose.Schema.Types.ObjectId
    },
    cliente:{
        type: mongoose.Schema.Types.ObjectId
    },
    produto:{
        type: mongoose.Schema.Types.ObjectId
    },
    valor:{
        type:Number
    },
    qtd:{
        type:Number
    }
})

export const Venda = mongoose.model<Venda>('Venda',vendaSchema)