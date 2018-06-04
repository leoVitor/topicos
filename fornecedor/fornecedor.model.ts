import mongoose from 'mongoose'

export interface Fornecedor extends mongoose.Document{
    nome:string,
    email:string
}

const fornecedorSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    email:{
        type:String
    }
})


export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor',fornecedorSchema)