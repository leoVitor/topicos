import mongoose from 'mongoose'

export interface Vendedor extends mongoose.Document{
    nome:string,
    telefone:string,
    email:string,
}

const vendaSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    telefone:{
        type:String
    },
    email:{
        type:String
    }
})
export const Vendedor = mongoose.model<Vendedor>('Vendedor',vendaSchema)