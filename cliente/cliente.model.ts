import mongoose from 'mongoose'

export interface Cliente extends mongoose.Document{
    nome: string,
    cpf: string,
    end: string,
    fone: string,    
}


const clienteSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    cpf:{
        type:String
    },
    end:{
        type:String
    },
    fone:{
        type:String
    }      
})

export const Cliente = mongoose.model<Cliente>('Cliente',clienteSchema)