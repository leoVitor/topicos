import mongoose from 'mongoose'

export interface Fornecedor extends mongoose.Document{
    nome:string,
    cnpj:string,
    telefone:string,
    email:string,
}

const fornecedorSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    cnpj:{
        type:String
    },
    telefone:{
        type:String
    },
    email:{
        type:String
    }
})


export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor',fornecedorSchema)