import mongoose from 'mongoose'
import { veiculoRotas } from '../veiculo/veiculo.rotas';

export interface Transportadora extends mongoose.Document{
    
    rzsocial:string,
    end:string,
    cnpj:string, 
}

const transportadoraSchema = new mongoose.Schema({
    rzsocial:{
        type:String
    },
    end:{
        type:String
    },
    cnpj:{
        type:String,
    }
})

export const Transportadora = mongoose.model<Transportadora>('Transportadora', transportadoraSchema)