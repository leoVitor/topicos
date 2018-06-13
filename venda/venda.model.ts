import mongoose from 'mongoose'

export interface Venda extends mongoose.Document{
    fornecedor:string,
    cliente:string,
    produto:string,
    valor:string


}

const vendaSchema = new mongoose.Schema({
    fornecedor:{
        type:String
    },
    cliente:{
        type:String
    },
    produto:{
        type:String
    },
    valor:{
        type:String
    }
})

export const Venda = mongoose.model<Venda>('Venda',vendaSchema)