import mongoose from 'mongoose'

export interface Veiculo extends mongoose.Document{
    _id:object,
    modelo:string,
    placa:string,
    transportadora:object,  
     
}

const veiculoSchema = new mongoose.Schema({
    modelo:{
        type:String
    },
    placa:{
        type:String
    },
    transportadora:{
        type: mongoose.Schema.Types.ObjectId
    }

})

export const Veiculo = mongoose.model<Veiculo>('Veiculo',veiculoSchema)