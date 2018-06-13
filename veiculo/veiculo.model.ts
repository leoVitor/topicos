import mongoose from 'mongoose'

export interface Veiculo extends mongoose.Document{
    modelo:string,
    placa:string,
}

const veiculoSchema = new mongoose.Schema({
    modelo:{
        type:String
    },
    placa:{
        type:String
    }
})

export const Veiculo = mongoose.model<Veiculo>('Veiculo',veiculoSchema)