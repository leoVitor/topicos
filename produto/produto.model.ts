import mongoose from 'mongoose'

export interface Produto extends mongoose.Document{
    nome:string,
    forn:string,
    valor:string,

}

const produtoSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    forn:{
        type:String
    },
    valor:{
        type:String
    }
})

export const Produto = mongoose.model<Produto>('Produto',produtoSchema) 