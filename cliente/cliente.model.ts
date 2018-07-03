import mongoose from 'mongoose'

export interface Cliente extends mongoose.Document{
    nome: string,
    cpf: number,
    end: string,
    fone: number,    
}


const clienteSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    cpf:{
        type:Number
    },
    end:{
        type:String
    },
    fone:{
        type:Number
    }      
})

export const Cliente = mongoose.model<Cliente>('Cliente',clienteSchema)