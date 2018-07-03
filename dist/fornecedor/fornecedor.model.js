"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fornecedorSchema = new mongoose_1.default.Schema({
    nome: {
        type: String
    },
    cpf: {
        type: Number
    },
    fone: {
        type: Number
    },
    email: {
        type: String
    },
    produto: {
        type: mongoose_1.default.Schema.Types.ObjectId,
    }
});
exports.Fornecedor = mongoose_1.default.model('Fornecedor', fornecedorSchema);
