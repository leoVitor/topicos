import mongoose from 'mongoose'

export interface Fornecedor extends mongoose.Document{
    _id:object,
    nome:string,
    cpf:number,
    fone:number,
    email:string,
    produto:object,
}

const fornecedorSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    cpf:{
        type:Number
    },
    fone:{
        type:Number
    },
    email:{
        type:String
    },
    produto:{
        type:mongoose.Schema.Types.ObjectId,
    }
})


export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor',fornecedorSchema)