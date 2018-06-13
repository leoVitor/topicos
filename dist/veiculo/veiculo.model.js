"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const veiculoSchema = new mongoose_1.default.Schema({
    modelo: {
        type: String
    },
    placa: {
        type: String
    }
});
exports.Veiculo = mongoose_1.default.model('Veiculo', veiculoSchema);
